const searchEl = document.querySelector('.search');
//const searchIputEl = document.querySelector('.search input'); // document요소 html이라고 볼 수 있다. 
const searchIputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  // Logic...
  searchIputEl.focus();
});

searchIputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchIputEl.setAttribute('placeholder', '통합검색');  // set는 무엇인가를 지정한다는 의미를 갖고 있고 Attribute는 html의 속성을 Attribute 부른다.
});

searchIputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchIputEl.setAttribute('placeholder', '');  // set는 무엇인가를 지정한다는 의미를 갖고 있고 Attribute는 html의 속성을 Attribute 부른다.
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023