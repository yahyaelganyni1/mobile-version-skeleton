const mobileMenuCloseIcon = document.querySelector('.mobile-menu-close-icon');
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menuLink = document.querySelectorAll('.menu-link');

mobileMenuCloseIcon.addEventListener('click', () => {
  document.querySelector('.header-desctop').style.display = 'none';
});

mobileMenuIcon.addEventListener('click', () => {
  document.querySelector('.header-desctop').style.display = 'unset';
});

for (let i = 0; i < menuLink.length; i + i) {
  menuLink[i].addEventListener('click', () => {
    document.querySelector('.header-desctop').style.display = 'none';
  });
}
