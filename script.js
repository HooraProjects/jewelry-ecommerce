'use strict';
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.right--header--menu');
const closeIcon = document.querySelectorAll('.close-icon');
const overlay = document.querySelector('.overlay')
overlay.style.display="none"
 sideBar.style.display = "none";
 
  

menuIcon.addEventListener('click',function(){
    
     sideBar.style.display = "flex";
     overlay.style.display="block";
     
    
           
})
closeIcon.forEach(function(icon){
    icon.addEventListener('click',function(){
        sideBar.style.display = "none";
        overlay.style.display="none";
    })
})
