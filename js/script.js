const mobileIcon = document.querySelector('.mobile-menu-icon');
const mobileIconClose = document.querySelector('.mobile-menu-close-icon');
const liLinks = document.querySelectorAll('.li-link');

mobileIcon.addEventListener('click', () => {
  document.getElementById('mobile-menu').style.display = 'unset';
});
mobileIconClose.addEventListener('click', () => {
  document.getElementById('mobile-menu').style.display = 'none';
});

liLinks.forEach((item) => {
  item.addEventListener('click', () => {
    document.getElementById('mobile-menu').style.display = 'none';
  });
});
