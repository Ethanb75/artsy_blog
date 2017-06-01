var express = require('express');
var mongoose = require('mongoose');
var app = express();
var uuidV4 = require('uuid/v4');
var port = process.env.PORT || 3000;

//define and load firebase
var firebase = require('./firebase/');
var firebaseRef = firebase.database().ref();
// console.log(firebaseRef.child());

var dataArr = [];


//use this function to set the post
function setPost () {
  var currentUUID = uuidV4();
  firebaseRef.child(`posts/${currentUUID}`).set({
    id: currentUUID,
    title: 'newer Post',
    date: '10/2/15',
    tags: ['frontend','code'],
    comments: ['wow cool', 'fun stuff'],
    content: 'ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam.'
  });
};
// setPost();
firebaseRef.child('posts').once('value').then(function (snap) {
    
    // var test = JSON.stringify(snap.val());
    // test = JSON.parse(test);
    var test = snap.val();
    // console.log(Object.keys(test));
    
    Object.keys(test).forEach(el => {
      firebaseRef.child(`posts/${el}`).once('value').then(function (snap) {
        var current = snap.val();
        dataArr.push({
          id: current.id,
          title: current.title,
          date: current.date,
          tags: current.tags,
          comments: current.comments,
          content: current.content
        });
        console.log(current.title);
        
      });
    });
  });
//define routes
var routes = './routes/index.js';

// //define middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



//connect to mongoose
// // var url = process.env.DATABASEURL || `mongodb://${process.env.USER}:${process.env.PASSWORD}@ds157621.mlab.com:57621/sassy_blog`;
// var url = 'mongodb://$admin:Meh?@ds157621.mlab.com:57621/sassy_blog'
// mongoose.connect(url, function(err){
//     if (err) throw err; 
// });


app.get('/', function (req, res) {
  console.log(dataArr.length);
  res.render('index', {dataArr: dataArr});
});

app.get('/:id', function (req, res) {
  
  firebaseRef.child(`posts/${req.params.id}`).once('value').then(function (snap) {
    console.log(snap.val());
    res.render('show', {data: snap.val()});
  });
});


//make the server with the defined routes listen for requests on port 3000
app.listen(port, () => {
  console.log(`the server is up on port: ${port}`);
});
