'use strict';
const sideBar = document.querySelector('.right--header--menu');
sideBar.style.display = "none";
const overlay = document.querySelector('.overlay');
overlay.style.display="none";

const footer  = `<footer id="footer">

<div class="wpb-wrapper">
<div class="links-footer">
<a href="#" class="links-footer-item">جواهرات آرما</a>
<a href="#" class="links-footer-item">تضمین برگشت / معاوضه کالا</a>
<a href="#" class="links-footer-item">باشگاه مشتریان</a>
<a href="#" class="links-footer-item">درباره ما / تماس با ما</a>
</div>

<div><small>تمامی حقوق مادی و معنوی این وبسایت متعلق به جواهری آرما می‌باشد</small></div>
</div>

<div class="wpb-wrapper">
<div class="join-club-footer-title"><p>عضویت در خبرنامه</p></div>
<div class="join-club-footer">
<input type="email" placeholder="ایمیل شما">
<input type="submit" value="عضویت" class="btn-submit-footer" >
</div>

</div></footer>`;

document.getElementById('footer').innerHTML= footer;

const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');




menuIcon.addEventListener('click',function(e){
   sideBar.style.display = "flex";
    overlay.style.display ="block";
    overlay.addEventListener('click',function(){
      sideBar.style.display = "none";
      overlay.style.display="none";
    })
  })      
                   
function closeSideBar(){
  sideBar.style.display = "none";
  overlay.style.display="none";
}




          