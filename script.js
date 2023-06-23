'use strict';

const slider = document.querySelector('.slider');
const slideImg = document.getElementById('slide');
const btnRight = document.querySelector('#arrow-btn-right');
 const btnLeft = document.querySelector('#arrow-btn-left');
const dotsContainer = document.getElementById('dots');
const closeIcon = document.querySelectorAll('.close-icon');
const filterSidebar = document.querySelector('.filter-sidebar');
const filterIcon = document.querySelector('.fa-filter');
const closeFilterIcon = document.querySelector('.close-icon-filter');
const rangeSlider = document.getElementById('myRange');
const orderby = document.querySelector('.orderby');
const product  = document.querySelector('.product');


const openMenu = function(){
  sideBar.style.display = "flex";
  overlay.style.display ="block";
  overlay.addEventListener('click',function(){
    sideBar.style.display = "none";
    overlay.style.display="none";
  })
}

closeIcon.forEach(function(icon){
  icon.addEventListener('click',function(){
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

 








   

       
           
            let products = [
                {
                      id:1,
                      src:'./assets/images/necklace-shop-lazy.png',
                      dataSrc:'./assets/images/necklace.jpg',
                      name:'گردنبند سه زنجیره',
                      price:'۵۵۰۰۰۰۰۰',
                      popularity:1,
                      rating:5

                },
                {
                    id:2,
                    src:'./assets/images/earring2-shop-lazy.jpg',
                    dataSrc:'/assets/images/earring2-shop.jpg',
                    name:'گوشواره مروارید طلا زرد',
                    price:'۲۵۰۰۰۰۰۰',
                    popularity:5,
                    rating:3
                },
                {
                    id:3,
                    src:'./assets/images/necklace2-shop-lazy.jpg',
                    dataSrc:'./assets/images/necklace2-shop.jpg',
                    name:'گردنبند سه زنجیره با سنگ فیروزه',
                    price:'۶۵۰۰۰۰۰۰',
                    popularity:3,
                    rating:4
                },
                {
                    id:4,
                    src:'./assets/images/earring1-shop-lazy.jpg',
                    dataSrc:'./assets/images/earring1-shop.jpg',
                    name:'گوشواره طرح گل',
                    price:'۲۰۰۰۰۰۰۰',
                    popularity:4,
                    rating:4
                },
                {
                    id:5,
                    src:'./assets/images/ring1-shop-lazy.jpg',
                    dataSrc:'./assets/images/ring1-shop.jpg',
                    name:'انگشتر دوحلقه ای',
                    price:'۳۵۰۰۰۰۰۰',
                    popularity:2,
                    rating:5
                },
                {
                    id:6,
                    src:'./assets/images/rings1-shop-lazy.jpg',
                    dataSrc:'./assets/images/rings1-shop.jpg',
                    name:'ست حلقه طلا سفید',
                    price:'۷۰۰۰۰۰۰۰',
                    popularity:6,
                    rating:3
                },
                {
                    id:7,
                    src:'./assets/images/bracelet2-shop-lazy.jpg',
                    dataSrc:'./assets/images/bracelet1-shop.jpg',
                    name:'دستبند طلا زرد و طلا سفید',
                    price:'۴۰۰۰۰۰۰۰',
                    popularity:7,
                    rating:4
                },
                
                {
                    id:8,
                    src:'./assets/images/rings2-shop-lazy.jpg',
                    dataSrc:'./assets/images/rings2-shop.jpg',
                    name:'ست حلقه طلا زرد و طلا سفید',
                    price:'۷۵۰۰۰۰۰۰',
                    popularity:8,
                    rating:2
                },
                {
                    id:9,
                    src:'./assets/images/bracelet2-shop-lazy.jpg',
                    dataSrc:'./assets/images/bracelet2-shop.jpg',
                    name:'دستبند طلا زرد',
                    price:'۶۰۰۰۰۰۰۰',
                    popularity:9,
                    rating:1
                }
               
            ]
              
            
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
             
            // products.map(product=>{ product.innerHTML = `<div class="product"><div class="overlay-lazy-img"> <div class="more-link"><a href="#">اطلاعات بیشتر</a></div> </div><img src=${product.src} data-src=${product.dataSrc} class="features-img lazy-img"></div></div>`;
             
                
            // })
      // lazy loading images
      'use strict';
      const menuIcon = document.querySelector('.menu-icon');
      const sideBar = document.querySelector('.right--header--menu');
      
      const overlay = document.querySelector('.overlay');
      
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
      
      document.querySelectorAll('footer').forEach(function(f){
          f.innerHTML= footer;
      })
      document.querySelectorAll('header').forEach(function(h){
          h.innerHTML= header;
      })
      overlay.style.display="none"
       sideBar.style.display = "none";
       
      
      
      
      
      
      
      for (const menu of document.querySelectorAll('.menu-icon')){
          menu.addEventListener('click',function(){
              document.querySelectorAll('.right--header--menu').forEach(function(sidebar){
                  sidebar.style.display = "flex";
                  overlay.style.display = "block";
                
                   })
          })
      
      
      
      }
      
         
             
      
              
      
       
      
          
                 
      
      document.querySelectorAll('.close-icon').forEach(function(icon){
          icon.addEventListener('click',function(){
              document.querySelectorAll('.right--header--menu').forEach(function(sidebar){
             sidebar.style.display = "none";
             document.querySelectorAll('.overlay').forEach(function(over){
              over.style.display ="none";
             })
              })
          })
      })





          