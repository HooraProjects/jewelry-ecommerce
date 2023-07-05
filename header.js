'use strict'
const myHeader = `<nav class="right-header">
<a id="menu-icon" onclick="openMenu()"><i class="fa-solid fa-bars"></i></a>
<ul class="right--header--menu">
  <li>
    <a id="close-icon" onclick="closeMenu()"><i class="fa-solid fa-xmark"></i></a>
  </li>
  <li><a href="./index.html" class="menu-item active" id="menu-item-1">آرما</a></li>
  <li>
    <a href="./armaShop.html" class="menu-item" id="menu-item-2">فروشگاه</a>
  </li>
  <li>
    <a href="./armaAbout.html" class="menu-item" id="menu-item-3"
      >درباره ما</a
    >
  </li>
  <li>
    <a href="./armaContactUs.html" class="menu-item" id="menu-item-4"
      >تماس با ما</a
    >
  </li>
</ul>
</nav>
<div id="logo-container">
<img src="./assets/images/logo.webp" id="logo--header" />
</div>

<div class="left-header">
 <div class="menu-item-left-header">
   <a href="#">
    <input type="text"  class="fas fa-search" placeholder="&#xf002">
   </a>
   <a href="#" class="menu-item-left-header">
   <i class="fa-solid fa-user"></i>
 </a>
<a href="#" class="menu-item-left-header"
><i class="fa-solid fa-cart-shopping"></i></a>
 </div>

</div>`
document.getElementById('arma--header').innerHTML = myHeader;