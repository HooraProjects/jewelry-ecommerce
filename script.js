'use strict';
const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.right--header--menu');
const closeIcon = document.querySelectorAll('.close-icon');
const overlay = document.querySelector('.overlay');
const footer  = `<div class="footer">

<div class="wpb-wrapper">
<div class="links-footer">
  <a href="#">جواهرات آرما</a>
  <a href="#">تضمین برگشت / معاوضه کالا</a>
  <a href="#">باشگاه مشتریان</a>
  <a href="#">درباره ما / تماس با ما</a>
</div>

<div><small>تمامی حقوق مادی و معنوی این وبسایت متعلق به جواهری آرما می‌باشد</small></div>
</div>

<div class="wpb-wrapper">
<div class="join-club-footer-title"><p>عضویت در خبرنامه</p></div>
<div class="join-club-footer">
  <input type="email" placeholder="ایمیل شما">
<input type="submit" value="عضویت">
</div>

</div></div>`;

document.querySelectorAll('footer').forEach(function(f){
    f.innerHTML= footer;
})
overlay.style.display="none"
 sideBar.style.display = "none";
 


menuIcon.addEventListener('click',function(){
    
     sideBar.style.display = "flex";
     overlay.style.display="block";
     overlay.addEventListener('click',function(){
        sideBar.style.display = "none";
        overlay.style.display="none";
      })
    
           
})
closeIcon.forEach(function(icon){
    icon.addEventListener('click',function(){
        sideBar.style.display = "none";
        overlay.style.display="none";
    })
})
