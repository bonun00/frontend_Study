/**
 * js 에서 원시값 or 기본타입을 제외한 모든 것들은 객체
 * 
 * 
 * 기본적인 차이는 원시값은 하나의 갓만 나타냄
 * 객체는 다양한 타입위 값들을 하나의 단위로 묶어서 구성되는 복합 자료구조
 * 
 * 객체 프로퍼티 (property,속성)으로 구성돈 집합
 * 프로퍼티는 key-value 로 구성됨
 * 
 * 
 * 
 * 
 */

//객체 리터럴 문법, {}가 객체를 뜻함

const dog={};// 별도의 프로퍼티가 없는 빈 객체

const cat ={
    age: 2
}

console.log(cat);// 객체 자체를 출력 
console.dir(cat); // 목록 형태로 출력 

console.log(cat.age);  //프로퍼티에 직접 접근

const rabbit ={
    age:2,
    name:'토토',

    // walk라는 프로퍼티에 함수 할당
    walk:()=> console.log("깡총깡총"),
    address: {
        si:'서울시',
        gu:'마포구',
        dong:'상암동'
    }
}

console.log(rabbit.walk); //함수 그 자체가 출력  됨

rabbit.walk (); //소괄호를 붙여서 호출하면 함수를 호출

console.log(`${rabbit.name}가 사는 곳은 ${rabbit.address.dong}입니다`);




