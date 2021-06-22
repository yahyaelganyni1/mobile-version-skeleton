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

const cards = document.querySelector('.the-main-section')


let projects = [
  {
    imgSrc: './imges/popup-img.png',
    header: 'Multi-Post StoriesGain+Glory' ,
    techList: ['Ruby on rails','css','JavScript','html'],
    btn: 'see project'
  },
  {
    imgSrc: './imges/popup-img.png',
    header: 'Multi-Post StoriesGain+Glory' ,
    techList: ['Ruby on rails','css','JavScript','html'],
    btn: 'see project'
  },
  {
    imgSrc: './imges/popup-img.png',
    header: 'Multi-Post StoriesGain+Glory' ,
    techList: ['Ruby on rails','css','JavScript','html'],
    btn: 'see project'
  },
  {
    imgSrc: './imges/popup-img.png',
    header: 'Multi-Post StoriesGain+Glory' ,
    techList: ['Ruby on rails','css','JavScript','html'],
    btn: 'see project'
  },
  {
    imgSrc: './imges/popup-img.png',
    header: 'Multi-Post StoriesGain+Glory' ,
    techList: ['Ruby on rails','css','JavScript','html'],
    btn: 'see project'
  },
  {
    imgSrc: './imges/popup-img.png',
    header: 'Multi-Post StoriesGain+Glory' ,
    techList: ['Ruby on rails','css','JavScript','html'],
    btn: 'see project'
  }
];


const ulCards = document.createElement('ul')
const jsCards = document.querySelector('.js-cards')
ulCards.classList.add('cards')


projects.forEach(project =>{
  let li = document.createElement('li')
  let img = document.createElement('img')
  let h3 = document.createElement('h3')
  let ul = document.createElement('ul')
  let btn = document.createElement('span')
  let a = document.createElement('a')
  let div = document.createElement('div')
  li.classList.add('card-container')
  li.appendChild(img)
  li.appendChild(h3)
  li.appendChild(div)
  li.appendChild(btn)
  div.appendChild(h3)
  div.appendChild(ul)
  btn.appendChild(a)
  btn.classList.add('see-project');
  img.setAttribute('src', project.imgSrc)
  img.classList.add('img')
  div.classList.add('card')
  h3.textContent = project.header
  project.techList.forEach(tech => {
    let li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = tech
  })
  btn.textContent = project.btn
  ulCards.appendChild(li)
});

jsCards.appendChild(ulCards)


// popup page

const popup = document.querySelectorAll('.popup')

let popupPage = [{
  imgSrc: './imges/popup-img.png',
  heading: 'project titel 1',
  tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
  p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btn: ['See live', 'See live']
},{
  imgSrc: './imges/popup-img.png',
  heading: 'project titel 2',
  tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
  p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btn: ['See live', 'See live']
},{
  imgSrc: './imges/popup-img.png',
  heading: 'project titel 3',
  tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
  p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btn: ['See live', 'See live']
},{
  imgSrc: './imges/popup-img.png',
  heading: 'project titel 4',
  tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
  p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btn: ['See live', 'See live']
},{
  imgSrc: './imges/popup-img.png',
  heading: 'project titel 5',
  tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
  p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btn: ['See live', 'See live']
},{
  imgSrc: './imges/popup-img.png',
  heading: 'project titel 6',
  tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
  p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. L orem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  btn: ['See live', 'See live']
}]

const seeProjectButtons = document.querySelectorAll('.see-project');
const modalDiv = document.createElement('div');
const body = document.querySelector('body');

seeProjectButtons.forEach((btn, index) => {
  btn.addEventListener("click", function() {
    let img = document.createElement('img');
    img.setAttribute('src', popupPage[index].imgSrc);
    let h3 = document.createElement('h3');
    h3.textContent = popupPage[index].heading;
    let ul = document.createElement('ul');
    popupPage[index].tech.forEach(techItem => {
      let li = document.createElement('li');
      li.textContent = techItem;
      ul.appendChild(li);
    });
    let p = document.createElement('p');
    p.textContent = popupPage[index].p;
    let btn1 = document.createElement('button');
    btn1.textContent = popupPage[index].btn[0];
    let btn2 = document.createElement('button');
    btn2.textContent = popupPage[index].btn[1];
    modalDiv.appendChild(img);
    modalDiv.appendChild(h3);
    modalDiv.appendChild(ul);
    modalDiv.appendChild(p);
    modalDiv.appendChild(btn1);
    modalDiv.appendChild(btn2);
    modalDiv.classList.add('mobile-modal');
    body.appendChild(modalDiv);
  });
});