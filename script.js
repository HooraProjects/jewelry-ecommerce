'use strict';

const closeIcon = document.querySelectorAll('.close-icon');
const menuIcon = document.querySelector('#menu-icon');
 const sideBar = document.querySelector('.right-header');
const overlay = document.querySelector('.overlay');
sideBar.style.display = "none";
overlay.style.display="none";


const header = ` <nav class="right-header">
<a class="menu-icon"><i class="fa-solid fa-bars"></i></a>
<ul class="right--header--menu">
  <li>
    <a class="close-icon"><i class="fa-solid fa-xmark"></i></a>
  </li>
  <li><a href="#" class="menu-item active" id="menu-item-1">آرما</a></li>
  <li>
    <a href="./armaShop.html" class="menu-item" id="menu-item-2">فروشگاه</a>
  </li>
  <li>
    <a href="./armaBlog.html" class="menu-item" id="menu-item-3">وبلاگ</a>
  </li>
  <li>
    <a href="./armaAboutUs.html" class="menu-item" id="menu-item-4"
      >درباره ما</a
    >
  </li>
  <li>
    <a href="./armaContactUs.html" class="menu-item" id="menu-item-5"
      >تماس با ما</a
    >
  </li>
</ul>
</nav>

<img src="./assets/images/logo.png" id="logo--header" />
<div class="left-header">
<a href="#" class="menu-item-left-header"
  ><i class="fa-solid fa-magnifying-glass"></i
></a>
<a href="#" class="menu-item-left-header">
            <i class="fa-solid fa-user"></i>
          </a>
<a href="#" class="menu-item-left-header"
  ><i class="fa-solid fa-cart-shopping"></i
></a>
</div>`;

const footer  = `<div class="footer" style="display: flex;

justify-content: space-around;
background-color: #F6F6F8;
height: 150px;
width: 100%;">

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

</div></div>`;


menuIcon.addEventListener('click',function(e){
   sideBar.style.display = "flex";
    overlay.style.display ="block";
    overlay.addEventListener('click',function(){
      sideBar.style.display = "none";
      overlay.style.display="none";
    })
  })



document.querySelectorAll('footer').forEach(function(f){
    f.innerHTML= footer;
})
document.querySelectorAll('header').forEach(function(h){
    h.innerHTML= header;
})        
            
        
function closeSidebar(){
  sideBar.style.display = "none";
  overlay.style.display="none";
}




          