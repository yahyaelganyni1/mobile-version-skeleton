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

const projects = [
  {
    imgSrc: './imges/project-img.jpg',
    header: 'Multi-Post StoriesGain+Glory',
    techList: ['Ruby on rails', 'css', 'JavScript', 'html'],
    btn: 'see project',
  },
  {
    imgSrc: './imges/project-img.jpg',
    header: 'Multi-Post StoriesGain+Glory',
    techList: ['Ruby on rails', 'css', 'JavScript', 'html'],
    btn: 'see project',
  },
  {
    imgSrc: './imges/project-img.jpg',
    header: 'Multi-Post StoriesGain+Glory',
    techList: ['Ruby on rails', 'css', 'JavScript', 'html'],
    btn: 'see project',
  },
  {
    imgSrc: './imges/project-img.jpg',
    header: 'Multi-Post StoriesGain+Glory',
    techList: ['Ruby on rails', 'css', 'JavScript', 'html'],
    btn: 'see project',
  },
  {
    imgSrc: './imges/project-img.jpg',
    header: 'Multi-Post StoriesGain+Glory',
    techList: ['Ruby on rails', 'css', 'JavScript', 'html'],
    btn: 'see project',
  },
  {
    imgSrc: './imges/project-img.jpg',
    header: 'Multi-Post StoriesGain+Glory',
    techList: ['Ruby on rails', 'css', 'JavScript', 'html'],
    btn: 'see project',
  },
];

const ulCards = document.createElement('ul');
const jsCards = document.querySelector('.js-cards');
ulCards.classList.add('cards');

projects.forEach((project) => {
  const li = document.createElement('li');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  const btn = document.createElement('span');
  const a = document.createElement('a');
  const div = document.createElement('div');
  li.classList.add('card-container');
  li.appendChild(img);
  li.appendChild(h3);
  li.appendChild(div);
  li.appendChild(btn);
  div.appendChild(h3);
  div.appendChild(ul);
  btn.appendChild(a);
  btn.classList.add('see-project');
  img.setAttribute('src', project.imgSrc);
  img.classList.add('img');
  div.classList.add('card');
  h3.textContent = project.header;
  project.techList.forEach((tech) => {
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = tech;
  });
  btn.textContent = project.btn;
  ulCards.appendChild(li);
});

jsCards.appendChild(ulCards);

// popup page

const popupPage = [
  {
    imgSrc: './imges/popup-img.png',
    imgSrcMobile: './imges/popup-mobile-img.png',
    closeBtn: './imges/icons/close-btn-popup.svg',
    closeBtnMobile: './imges/icons/popup-close-btn-mobile.svg',
    githubIcon: '../imges/icons/github-icon.svg',
    seeLiveIcon: './imges/icons/see-live-icon.svg',
    heading: 'project titel 1',
    tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. L orem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    btn1: ['See live'],
    btn2: ['See Source'],
  },
  {
    imgSrc: './imges/popup-img.png',
    imgSrcMobile: './imges/popup-mobile-img.png',
    closeBtn: './imges/icons/close-btn-popup.svg',
    closeBtnMobile: './imges/icons/popup-close-btn-mobile.svg',
    githubIcon: '../imges/icons/github-icon.svg',
    seeLiveIcon: './imges/icons/see-live-icon.svg',
    heading: 'project titel 2',
    tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. L orem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    btn1: ['See live'],
    btn2: ['See Source'],
  },
  {
    imgSrc: './imges/popup-img.png',
    imgSrcMobile: './imges/popup-mobile-img.png',
    closeBtn: './imges/icons/close-btn-popup.svg',
    closeBtnMobile: './imges/icons/popup-close-btn-mobile.svg',
    githubIcon: '../imges/icons/github-icon.svg',
    seeLiveIcon: './imges/icons/see-live-icon.svg',
    heading: 'project titel 3',
    tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. L orem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    btn1: ['See live'],
    btn2: ['See Source'],
  },
  {
    imgSrc: './imges/popup-img.png',
    imgSrcMobile: './imges/popup-mobile-img.png',
    closeBtn: './imges/icons/close-btn-popup.svg',
    closeBtnMobile: './imges/icons/popup-close-btn-mobile.svg',
    githubIcon: '../imges/icons/github-icon.svg',
    seeLiveIcon: './imges/icons/see-live-icon.svg',
    heading: 'project titel 4',
    tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. L orem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    btn1: ['See live'],
    btn2: ['See Source'],
  },
  {
    imgSrc: './imges/popup-img.png',
    imgSrcMobile: './imges/popup-mobile-img.png',
    closeBtn: './imges/icons/close-btn-popup.svg',
    closeBtnMobile: './imges/icons/popup-close-btn-mobile.svg',
    githubIcon: '../imges/icons/github-icon.svg',
    seeLiveIcon: './imges/icons/see-live-icon.svg',
    heading: 'project titel 5',
    tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. L orem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took',
    btn1: ['See live'],
    btn2: ['See Source'],
  },
  {
    imgSrc: './imges/popup-img.png',
    imgSrcMobile: './imges/popup-mobile-img.png',
    closeBtn: './imges/icons/close-btn-popup.svg',
    closeBtnMobile: './imges/icons/popup-close-btn-mobile.svg',
    githubIcon: '../imges/icons/github-icon.svg',
    seeLiveIcon: './imges/icons/see-live-icon.svg',
    heading: 'project titel 6',
    tech: ['Codekit', 'GitHub', 'Javasript', 'Bootstrap', 'Terminal', 'Terminal'],
    p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. L orem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer',
    btn1: ['See live'],
    btn2: ['See Source'],
  },
];

const seeProjectButtons = document.querySelectorAll('.see-project');
const modalDiv = document.createElement('div');
const modalDivbg = document.createElement('div');
const body = document.querySelector('body');
modalDiv.classList.add('popup-modal');
modalDivbg.classList.add('popup-modal-bg');

seeProjectButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const closeBtn = document.createElement('img');
    closeBtn.setAttribute('src', popupPage[index].closeBtn);
    closeBtn.classList.add('close-btn');
    const closeBtnMobile = document.createElement('img');
    closeBtnMobile.setAttribute('src', popupPage[index].closeBtnMobile);
    closeBtnMobile.classList.add('close-btn-mobile');
    const img = document.createElement('img');
    img.setAttribute('src', popupPage[index].imgSrc);
    img.classList.add('main-img-popup');
    const imgMobil = document.createElement('img');
    imgMobil.setAttribute('src', popupPage[index].imgSrcMobile);
    imgMobil.classList.add('main-img-popup-mobil');
    const h3 = document.createElement('h3');
    h3.textContent = popupPage[index].heading;
    const ul = document.createElement('ul');
    popupPage[index].tech.forEach((techItem) => {
      const li = document.createElement('li');
      li.textContent = techItem;
      ul.appendChild(li);
    });
    const liveBtn = document.createElement('div');
    const popupDiv = document.createElement('div');
    const bodyAndBtn = document.createElement('div');
    liveBtn.classList.add('live-btn');
    popupDiv.classList.add('popup-body');
    bodyAndBtn.classList.add('body-and-btn');
    const p = document.createElement('p');
    p.textContent = popupPage[index].p;

    const btn1 = document.createElement('button');
    btn1.textContent = popupPage[index].btn1;
    const githubIcon = document.createElement('img');
    githubIcon.setAttribute('src', popupPage[index].githubIcon);
    btn1.appendChild(githubIcon);
    const btn2 = document.createElement('button');
    btn2.textContent = popupPage[index].btn2;
    const seeLiveIcon = document.createElement('img');
    seeLiveIcon.setAttribute('src', popupPage[index].seeLiveIcon);
    btn2.appendChild(seeLiveIcon);
    modalDivbg.querySelectorAll('*').forEach((el) => {
      el.remove();
    });
    modalDivbg.appendChild(modalDiv);
    modalDiv.appendChild(closeBtn);
    modalDiv.appendChild(closeBtnMobile);
    modalDiv.appendChild(img);
    modalDiv.appendChild(imgMobil);
    popupDiv.appendChild(h3);
    popupDiv.appendChild(ul);
    popupDiv.appendChild(p);
    bodyAndBtn.appendChild(popupDiv);
    modalDiv.appendChild(bodyAndBtn);
    liveBtn.appendChild(btn1);
    liveBtn.appendChild(btn2);
    bodyAndBtn.appendChild(liveBtn);
    modalDiv.appendChild(bodyAndBtn);
    body.appendChild(modalDivbg);
    closeBtn.addEventListener('click', () => {
      modalDivbg.querySelectorAll('*').forEach((el) => {
        el.remove();
      });
    });
    closeBtnMobile.addEventListener('click', () => {
      modalDivbg.querySelectorAll('*').forEach((el) => {
        el.remove();
      });
    });
  });
});

// forme validate
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const isUpperCase = (string) => /[A-Z]/.test(string);

form.addEventListener('submit', (e) => {
  const measasges = [];
  if (isUpperCase(email.value)) {
    e.preventDefault();
    measasges.push('email need to be in lowercase');
    error.innerText = measasges;
  }
});
