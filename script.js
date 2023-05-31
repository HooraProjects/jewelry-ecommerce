'use strict';
const slider = document.querySelector('.slider');
const slideImg = document.getElementById('slide');
const btnRight = document.querySelector('#arrow-btn-right');
const btnLeft = document.querySelector('#arrow-btn-left');
const dotsContainer = document.querySelector('.dots');
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.right--header--menu');

sideBar.style.display = "none";
let i = 0;
const images =['./assets/images/ring-background-image.jpg','./assets/images/earring-background-image.jpg','./assets/images/ring3-background-image.jpg'];
function prevImg(){ 
    if( i <= 0)  i=images.length;
    i--;
    setImg(i);
    activateDot(i);     
}
function nextImg(){
    if(i >= images.length-1) i = -1;
    i++;  
   setImg(i);
   activateDot(i);  
}
btnRight.addEventListener('click',nextImg);
btnLeft.addEventListener('click',prevImg);

const setImg = function(i){
    slideImg.src = images[i];
    activateDot(i);
}
const createDots = function(){
    images.forEach(function(s,i){
        dotsContainer.insertAdjacentHTML('beforeend',`<div class="dot" data-slide="${i}"></div>`);
    })
}
const activateDot = function(i){
    document.querySelectorAll(`.dot`).forEach(function(dot){
        dot.classList.remove('dot--active');
        
    })
    document.querySelector(`.dot[data-slide="${i}"]`).classList.add('dot--active');
    
}
createDots();
activateDot(0);
document.addEventListener('keydown',function(e){
    (e.key === 'ArrowLeft') && prevImg();
    (e.key === 'ArrowRight') && nextImg();
})
dotsContainer.addEventListener('click',function(e){
    e.target.classList.add('dot--active');      
       const i = e.target.getAttribute('data-slide');
       setImg(i);
})
menuIcon.addEventListener('click',function(){
    sideBar.style.display = "flex";
   
    
    
})

