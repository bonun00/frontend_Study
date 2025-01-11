const a=5;
// typeof 연산자를 통해 데이터 타입 확인 
console.log(typeof a);


// 데이터 타입을 설정하는 이유
// 가독성, 메모리 효율


// 자바스크립트 와 자바의 차이
// 자바스크립트는 타입과 상관없이 자율적으로 선언가능 되지마누 자바는 그렇지 않다
// 자바스크립트 동적타입언어 자바는 정적 타입 언어

// 자바는 햄,,,자바스크립트는 햄스터

// 자바스크립트는 프로토타입 기반 언어 // 자바는 객체지향 언어
let userName='Yoo';
console.log(typeof userName);

userName =5;
console.log(typeof username);
// 런타임(실행과정)에 타입이 결정되는 동적 타입 언어이다

//자바는 컴파일 과정에서 타입이 결정되는 정적 타입 언어


const myName='유';
console.log('ㅎㅇ 나는 ',myName,'야')// comma 연산
console.log('ㅎㅇ 나는 '+myName+'야')//+ 연산
console.log(`ㅎㅇ 나는 ${myName}야`)//물결표 밑에있는 기호 backtick
// ${들어갈수 있는 값 }=> 값, 식 할당
console.log(`${1+1}`);// 식 할당 가능

//console.log(`${const b = 6}}`);//문장은 할당 불가

