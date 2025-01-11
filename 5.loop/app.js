

// 반복문도 기본은 Java 문법과 동일
// for (let index = 0; index < 5; index++) {
//     console.log(index);
// }

// JS에서 문자열은 배열처럼 동작하기도 함
const rainbow = 'rainbow';

// 문자열이지만 배열의 인덱스처럼 접근 가능
console.log(rainbow[0]); 

for (let index = 0; index < rainbow.length; index++) {
    console.log(rainbow[index]);
}

const foods = ['apple', 'orange-cookie', 'avocado', 'doctor-peppermint'];
let favorite = '내가 좋아하는 음식은..';

// 반복문, 조건문을 활용하여 아래와 같이 출력되도록
// 내가 좋아하는 음식은.. apple, orange-cookie, avocado 그리고 doctor-peppermint

for(let index=0; index<foods.length; index++){
    if(index=== foods.length-1){
        favorite+= '그리고'+ foods[index];
    }else{
        favorite+=foods[index]+','
    }
}

console.log(favorite);

const fruits=['apple', 'banana','cocout'];

const fruitsPrinter = fruit => console.log(fruit);


//자바스크림트는 함수도 변수에 들어 갈수 있다 일급 객체(일급 시민)
// 우측의 함수를 좌측의 변수에 할당
//js에서는 함수도 변수에 할당 할 수 있음 

fruits.forEach(fruitsPrinter);

//별도의 변수로 두지 않고 인라인 으로 작성
// fruits.forEach(fruit=> console.log(fruit));