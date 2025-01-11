
//DOM -> 객체

console.log(document);

//directionary
console.dir(document)


//alert 프로퍼티의 타입 조회 -> function
console.log(typeof window.alert);


//DOM 을 통한 HTML 태그 조작

//h1 태그는 id 값으로 가져오기  
const h1= document.getElementById('main-title');
console.log(h1); // h1 태그 출력 

console.log(h1.innerText);
h1.innerText='다른값'

//li태그를 태그이름으로 한번에 전부 가져오기

const liList =document.querySelectorAll('li');
console.log(liList);

const liList2 =document.getElementsByClassName('list-item');
console.log(liList2);




//li태그를 클래스 이름으로 가져오기