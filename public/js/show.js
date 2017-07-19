firebase.database().ref('posts').once('value').then(snap => {
  let valArr = [];
  Object.entries(snap.val()).forEach(el => {
    valArr.push(el[0])
  })
  localStorage.setItem('otherPosts', valArr.join());
});

(function (doc) {
  let randomBtn = doc.getElementById('randomBtn');
  let nextBtn = doc.getElementById('nextBtn');
  let posts = localStorage.getItem('otherPosts').split(',');
  

  nextBtn.onclick = function () {
    let pathname = location.pathname;
    let current = pathname.slice(1, pathname.length);
    let index = posts.findIndex(el => {
      return el === current
    });

    if (index + 1 === posts.length) {
      index++;
      index -= posts.length;
    } else {
      index++;
    }

    console.log(index);

    window.location.pathname = posts[index]
  }

  randomBtn.onclick = () => window.location.pathname = posts[Math.abs(Math.floor(Math.random() * posts.length))]
  
}(document))