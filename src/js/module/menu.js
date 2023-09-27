const menuBtn = document.querySelector('.menu-btn');
const menuContainer = document.querySelector('.nav_header');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.header__link');
const toggleMenu = () => {
  menuContainer.classList.toggle('nav_header_active');
  menuBtn.classList.toggle('menu-btn_active');
  overlay.classList.toggle('overlay_active');

}

menuBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

menuLinks.forEach(element => {
  element.addEventListener('click', () => {
    menuBtn.classList.remove('menu-btn_active');
    overlay.classList.remove('overlay_active');
    menuContainer.classList.remove('nav_header_active');
  })
})
