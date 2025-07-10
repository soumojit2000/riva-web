let toggler= document.getElementById('toggler');
let navlist= document.getElementById('navlist');

toggler.addEventListener('click',listDisplay)

function listDisplay(){
    navlist.classList.toggle('showList')
}

//Changing navbar bg-color when user scrolls down:
let navbar=document.getElementById('navbar');

window.addEventListener('scroll',checkScroll);
//here window means full browser window. this above line thus means that when the 'scroll' event will occur then it will call or activate the 'checkScroll' function and below are the conditions with which the function will run.
function checkScroll(){
    if (window.scrollY >100) {
        navbar.classList.add('scrolled');
        //this above line means that if the user scrolls down more than 100px through browser window then the 'scrolled' class will be added with the 'navbar' class and thus the bg-color of the navbar automatically turns black as we have already given bg-color black under 'scrolled' class in CSS.
    }
    else{
        navbar.classList.remove('scrolled');
        //this means that the 'scrolled' class will be removed if the user scrolls down less than 100px and so the bg-color of the navbar remains transperant.
    }
}