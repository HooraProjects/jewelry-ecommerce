'use strict';
const header = `<header class="arma--header" role="banner">
 <nav class="right-header">
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
    <a href="./armaAboutUs.html" class="menu-item" id="menu-item-3"
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
</div>
</header>`;
document.getElementsByTagName('header').innerHTML= header;