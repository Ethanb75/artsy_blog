//TODO:
//----------------------
//add glare if click on contact and already at page bottom
//

"use strict"

let aboutCloseIcon = document.querySelector('.about > i'),
               cnt = document.getElementById('cnt'),
      cntCloseIcon = document.querySelector('#cnt > i'),
        articleBtn = document.getElementById('articles'),
          aboutBtn = document.getElementById('about'),
        contactBtn = document.getElementById('contact'),
       messageForm = document.querySelector('#cnt > form'),
         thanksBox = document.querySelector('.thanks'),
        navigation = document.querySelector('.navi');
            

    //Array constants
    const hr_array = document.getElementsByTagName('hr'),
          art_list = document.getElementById('test').children,
          colorful = document.getElementsByClassName('colorful');
    
    //firebase
    let messageListRef = firebase.database().ref('/messages');

// flash thanks ( ͡° ͜ʖ ͡°)
function flashThanks () {
    thanksBox.classList.toggle('showThanks');
    
    setTimeout(() => {
        return toggleContact();
    }, 500);

    setTimeout(() => {
       return thanksBox.classList.toggle('showThanks');
    }, 2000)
}

function postMessage (message, nickname) {
    let time = new Date().getTime();

    let newPostRef = messageListRef.push();
    newPostRef.set({
        message,
        nickname,
        time
    });

    return flashThanks();
}

function toggleContact () {
    let cnt = document.getElementById('cnt');
    if (cnt.classList.contains('showing')) {
        cnt.style.transform = `translateX(${cnt.clientWidth + 25}px)`;
        cnt.classList.remove('showing')
    } else {
        cnt.style.transform = 'translateX(0px)';
        cnt.classList.add('showing')
    }
}

function toggleAbout () {
    let aboutArea = document.getElementsByClassName('about')[0];
        
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });

    aboutArea.classList.toggle('about-down');
    aboutArea.classList.toggle('about-up');
}

function toggleArticles () {
    //base transition duration will be .3s and increment by .2s
    let delay = .3;
    //for the length of the items in the list module
    for (let i = 0; i < test.children.length; i++) {
        let current = test.children[i];
        
        //Set the transition properties using the delay variable
        current.style.transition = `all ${delay}s ease-out`;
        
        //toggle the class to hide or show the current list item and increment the delay before moving along
        current.classList.toggle('bar-hide');
        current.classList.toggle('bar-show');
        delay += .2;
    };
    test.classList.toggle('zUp'); 
}

function colorPage (color1, color2) {
    navigation.style.background = color1;
    for (let i = 0; i < colorful.length; i++) {
        colorful[i].style.background = color1;
    }
    for (let i = 0; i < hr_array.length; i++) {
        hr_array[i].style.borderBottomColor = color2;
    }
    for (let z = 0; z < art_list.length; z++) {
        art_list[z].style.background = color1;
    }
    title.style.color = color2;
}





    //mouseover functions
    aboutBtn.onmouseover = () => colorPage('var(--cool_blue)', '#4F636F');
    contactBtn.onmouseover = () => colorPage('#009688', '#074943');
    articleBtn.onmouseover = () => colorPage('rosybrown', 'var(--dark_brown)');



    //event listeners for header nav
    articleBtn.onclick = () => toggleArticles();
    contactBtn.onclick = () => toggleContact();
    aboutBtn.onclick = () => toggleAbout();





    // event listeners for scrolling nav
    scroll_art.onclick = () => toggleArticles();
    scroll_abt.onclick = () => toggleAbout();
    scroll_cnt.onclick = () => toggleContact();

    // close About and Contact icons
    cntCloseIcon.onclick = () => toggleContact();
    aboutCloseIcon.onclick = () => toggleAbout();
    

    //message form listener
    messageForm.onsubmit = event => {
        event.preventDefault();

        let message = event.target.children[3].value;
        let name = event.target.children[1].value;

        if (message.length > 0) {
            //set to null
            event.target.children[3].value = '';
            event.target.children[1].value = '';

           return postMessage(message, name); 
        } else {
            // if no message, flash 'message needed'

        }
        
    }





    //Below are helper functions
    //---------------------------------------------------------------------------
    //helper resources: (const vs let: http://wesbos.com/let-vs-const/), ()
    //true equals capturing, false is bubbling
    const body = document.getElementsByTagName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    
    body.addEventListener('click', function(data) {
        console.log('parent data: ', data);
    });
    window.onscroll = function(e) {
        let bounds = navigation.getBoundingClientRect();

        if (bounds.top < 0) {
            scrollbar.classList.remove('scroll-hide');
            scrollbar.classList.add('scroll-show');
        } else if (bounds.top > 0) {
           scrollbar.classList.add('scroll-hide');
           scrollbar.classList.remove('scroll-show');
        }

        // if (e.pageY < window.scrollMaxY - cntBounds[0].height) {
        //     // console.log('less than!')
        // } else if (e.pageY > window.scrollMaxY - cntBounds[0].height) {
        //     // console.log('greater than!')
        // }
    };
