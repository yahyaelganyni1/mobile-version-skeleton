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


// card sec

// const cards = document.querySelector('.the-main-section')
console.log('projects');


// let projects = [
//   {
//     imgSrc: './imges/popup-img.png',
//     header: 'Multi-Post StoriesGain+Glory' ,
//     techList: ['Ruby on rails','css','JavScript','html'],
//     btn: 'see project'
//   },
//   {
//     imgSrc: './imges/popup-img.png',
//     header: 'Multi-Post StoriesGain+Glory' ,
//     techList: ['Ruby on rails','css','JavScript','html'],
//     btn: 'see project'
//   },
//   {
//     imgSrc: './imges/popup-img.png',
//     header: 'Multi-Post StoriesGain+Glory' ,
//     techList: ['Ruby on rails','css','JavScript','html'],
//     btn: 'see project'
//   },
//   {
//     imgSrc: './imges/popup-img.png',
//     header: 'Multi-Post StoriesGain+Glory' ,
//     techList: ['Ruby on rails','css','JavScript','html'],
//     btn: 'see project'
//   },
//   {
//     imgSrc: './imges/popup-img.png',
//     header: 'Multi-Post StoriesGain+Glory' ,
//     techList: ['Ruby on rails','css','JavScript','html'],
//     btn: 'see project'
//   },
//   {
//     imgSrc: './imges/popup-img.png',
//     header: 'Multi-Post StoriesGain+Glory' ,
//     techList: ['Ruby on rails','css','JavScript','html'],
//     btn: 'see project'
//   }
// ];




// popup page

// const popup = document.querySelectorAll('.popup')

// let popupPage = [{
//   imgSrc: './imges/popup-img.png',
//   heading: 'project titel 1',
//   tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
//   p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
//   btn: ['See live', 'See live']
// },{
//   imgSrc: './imges/popup-img.png',
//   heading: 'project titel 2',
//   tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
//   p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
//   btn: ['See live', 'See live']
// },{
//   imgSrc: './imges/popup-img.png',
//   heading: 'project titel 3',
//   tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
//   p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
//   btn: ['See live', 'See live']
// },{
//   imgSrc: './imges/popup-img.png',
//   heading: 'project titel 4',
//   tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
//   p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
//   btn: ['See live', 'See live']
// },{
//   imgSrc: './imges/popup-img.png',
//   heading: 'project titel 5',
//   tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
//   p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
//   btn: ['See live', 'See live']
// },{
//   imgSrc: './imges/popup-img.png',
//   heading: 'project titel 6',
//   tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
//   p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. L orem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
//   btn: ['See live', 'See live']
// }]


