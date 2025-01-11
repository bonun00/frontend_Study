console.log('hello'); //   단축키 log



// 변수선언
// var도 있지만  별로 중요치 않다

// 변수 선언시 사용하는 키워드 or 예약어

// console.log(a);

// var a = 5;

// console.log(1+1);

// 변수를 선언할때는 let 키워드를 사용한다

let username='koo';
console.log(username);

username ='kim' // 변수기 때문에 재할당가능
console.log(username);

// var, let 둘다 못쓴다.
//변수를 let으로 했을때 다른사람이 코드를 변경해 버릴수도 있는데 이를 방지하기 위해 const 사용한다.
//const로 하는게 값의 변경 가능성을 줄일수 있다 

//상수? (constant) -값이 한번 초기화된후 재할당 x

const allUsers=5;
allUsers =10; // 재할당 불가

// 상수는 대문자를 사용하기도 함
const PI =3.14;
COnst BUTTON_PRIMART_COLOR ='red';

//기본적으로 const를 사용해서 방어적으로 작성
//그 이후 변경이 필요할 것 같은 값만 let으로 할당 
