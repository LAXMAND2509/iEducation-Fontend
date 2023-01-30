
//The querySelector() method returns the first element that matches a CSS selector 
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');
logoreps = document.querySelector('.logo-reps');

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-reps');
    navList.classList.toggle('v-class-reps');
    navbar.classList.toggle('h-nav-reps');
    logoreps.classList.toggle('logo-reps-activate');
});

function replaceFunction(){
    windows.location.replace("https://en.unesco.org/futuresofeducation/");
}