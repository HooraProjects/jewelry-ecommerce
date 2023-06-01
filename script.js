'use strict';
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.right--header--menu');
const closeIcon = document.querySelectorAll('.close-icon');
 sideBar.style.display = "none";
  

menuIcon.addEventListener('click',function(){
    
     sideBar.style.display = "flex";
           
})
closeIcon.forEach(function(icon){
    icon.addEventListener('click',function(){
        sideBar.style.display = "none";
    })
})

