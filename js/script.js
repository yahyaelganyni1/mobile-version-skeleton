const mobileMenuCloseIcon = document.querySelector(".mobile-menu-close-icon");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");

mobileMenuCloseIcon.addEventListener('click', (e) => {
  document.querySelector(".header-desctop").style.display = "none";
});

mobileMenuIcon.addEventListener('click', (e) => {
  document.querySelector(".header-desctop").style.display = "unset";
});