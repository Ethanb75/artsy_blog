var express = require('express');
var app = express();
var uuidV4 = require('uuid/v4');
var port = process.env.PORT || 3000;

//define and load firebase
var firebase = require('./firebase/');
var firebaseRef = firebase.database().ref();
// console.log(firebaseRef.child());

var dataArr = [];


//use this function to set the post
function setPost (title, date) {
  var currentUUID = uuidV4();
  firebaseRef.child(`posts/${currentUUID}`).set({
    id: currentUUID,
    title: title,
    date: date,
    tags: ['frontend','code'],
    chapters: ['Ipsum', 'Lorem', 'REST'],
    comments: ['wow cool', 'fun stuff'],
    content: 'ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam. ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores ullam repellendus recusandae, suscipit aperiam nemo, blanditiis excepturi libero, nostrum enim possimus ipsam vero aliquam provident ipsa ut cum! Aperiam.'
  });
};
var tango = new Date();
tango = tango.getTime();
// setPost('AAA', tango);

firebaseRef.child('posts').once('value').then(function (snap) {
    
    var val = snap.val();
    // console.log(Object.keys(test));
    
    Object.keys(val).forEach(el => {
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
// var routes = './routes/index.js';

// //define middleware
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res) {
  // sort array, smaller times are later, (seconds from unix time)
  dataArr.sort((a, b) => {
    return b - a;
  });

  //first in array is newest article, farthest is latest
  res.render('index', {dataArr: dataArr});
});

app.get('/:id', function (req, res) {
  firebaseRef.child(`posts/${req.params.id}`).once('value').then(function (snap) {
    
    res.render('show', {data: snap.val()});
  });
});


//make the server with the defined routes listen for requests on port 3000
app.listen(port, () => {
  console.log(`the server is up on port: ${port}`);
});
