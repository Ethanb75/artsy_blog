firebase.database().ref('posts').once('value').then(snap => {
  let valArr = [];
  Object.entries(snap.val()).forEach(el => {
    valArr.push(el[0])
  })
  localStorage.setItem('otherPosts', valArr.join());
});

(function (doc) {
  let randomBtn = doc.getElementById('randomBtn');

  randomBtn.onclick = function () {
    let posts = localStorage.getItem('otherPosts').split(',');
    console.log(posts[Math.abs(Math.floor(Math.random() * posts.length))])
    window.location.pathname = posts[Math.abs(Math.floor(Math.random() * posts.length))]

  }
}(document))