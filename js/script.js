const mobileIcon = document.querySelector('.mobile-menu-icon');
const mobileIconClose = document.querySelector('.mobile-menu-close-icon');

mobileIcon.addEventListener('click', () => {
  document.getElementById('mobile-menu').style.display = 'unset';
});
mobileIconClose.addEventListener('click', () => {
  document.getElementById('mobile-menu').style.display = 'none';
});
