//TODO:
//----------------------
//add glare if click on contact and already at page bottom
//




window.onload = (function () {
    const articleBtn = document.getElementById('articles'),
            aboutBtn = document.getElementById('about'),
          contactBtn = document.getElementById('contact'),
          navigation = document.querySelector('.navi');
            

    //Array constants
    const hr_array = document.getElementsByTagName('hr'),
          art_list = document.getElementById('test').children,
          colorful = document.getElementsByClassName('colorful');



    //MOUSEOVER FUNCtiONS
    //do hr first b/c it's easy
    aboutBtn.onmouseover = function () {
        navigation.style.background = 'var(--cool_blue)';
        for (let i = 0; i < colorful.length; i++) {
            colorful[i].style.background = 'var(--cool_blue)';
        }
        for (let i = 0; i < hr_array.length; i++) {
            hr_array[i].style.borderBottomColor = '#4F636F';
        }
        for (let z = 0; z < art_list.length; z++) {
            art_list[z].style.background = 'var(--cool_blue)'
        }
        title.style.color = '#4F636F';
    }
    contactBtn.onmouseover = function () {
        // navigation.style.background = '#009688';
        navigation.style.background = '#009688';
        for (let i = 0; i < colorful.length; i++) {
            colorful[i].style.background = '#009688';
        }
        for (let i = 0; i < hr_array.length; i++) {
            // hr_array[i].style.borderBottomColor = '#074943';
            hr_array[i].style.borderBottomColor = '#074943';
        }
        for (let z = 0; z < art_list.length; z++) {
            art_list[z].style.background = '#009688'
        }
        // title.style.color = '#074943';
        title.style.color = '#074943';
    }
    articleBtn.onmouseover = function () {
        navigation.style.background = 'rosybrown';
        for (let i = 0; i < colorful.length; i++) {
            colorful[i].style.background = 'rosybrown';
        }
        for (let i = 0; i < hr_array.length; i++) {
            hr_array[i].style.borderBottomColor = 'var(--dark_brown)';
        }
        for (let z = 0; z < art_list.length; z++) {
            art_list[z].style.background = 'rosybrown'
        }
        title.style.color = 'var(--dark_brown)';
    };






    //ONCLICK FUNCTIONS UPPER NAV
    articleBtn.onclick = function () {
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
    };
    contactBtn.onclick = function () {
        window.scroll({
            top: window.scrollMaxY,
            behavior: 'smooth'
        });
        // cnt.classList.toggle('contact-show');
        // cnt.classList.toggle('contact-hide');
    };
    //bubbling by default
    aboutBtn.onclick = function () {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        document.getElementsByClassName('about')[0].classList.toggle('about-down');
        document.getElementsByClassName('about')[0].classList.toggle('about-up')
    };





    //ONCLICK FUNCTIONS SCROLLING NAV
    scroll_art.onclick = function () {
        //base transition duration will be .3s and increment by .2s
        let delay = .3;

        //scroll up first
        document.getElementsByClassName('navi')[0].scrollIntoView({
            behavior: 'smooth'
        });
        //for the length of the items in the list module
        for (let i = 0; i < test.children.length; i++) {
            let current = test.children[i];
            
            //Set the transition properties using the delay variable
            current.style.transition = `all ${delay}s ease-out`;
            
            //toggle the class to hide or show the current list item and increment the delay before moving along
            current.classList.remove('bar-hide');
            current.classList.add('bar-show');
            delay += .2;
        } 
    };
    scroll_abt.onclick = function () {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        

        document.getElementsByClassName('about')[0].classList.remove('about-down');
        document.getElementsByClassName('about')[0].classList.add('about-up')
    };
    scroll_cnt.onclick = function () {
        try {
            window.scroll({
            top: window.scrollMaxY,
            behavior: 'smooth'
        });
        } catch (error) {
            
        }

        cnt.classList.add('contact-show');
        cnt.classList.remove('contact-hide');
    };
    
    






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
        console.log(bounds.top);
        if (bounds.top < 0) {
            scrollbar.classList.remove('scroll-hide');
            scrollbar.classList.add('scroll-show');
        } else if (bounds.top > 0) {
           scrollbar.classList.add('scroll-hide');
           scrollbar.classList.remove('scroll-show');
        }
    }
})();