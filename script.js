'use strict';





const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

     
function openMenu() {
  sideBar.style.display = "flex";
  overlay.style.display ="block";
  overlay.addEventListener('click',function(){
  sideBar.style.display = "none";
  overlay.style.display="none";
  })
  }
 
function closeMenu(){
     sideBar.style.display = "none";
      overlay.style.display="none"; 
}

    
                   
function closeSideBar(){
  sideBar.style.display = "none";
  overlay.style.display="none";
}




          