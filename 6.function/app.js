// js 함수 정의 방식이 다양함

// 기본적인 함수정의 -1 , '함수 선언문 ' 방식

//add 라는 이름의 함수를 선언
function add(a,b){
    return a+b; 
}

/**
 * js Doc
 * 
 * 
 * @param
 * @returns
 * @author 'yoo'(주로 깃허브 닉네임)
 * 
 */


console.log(add('3', 5));



///두번째 함수 생성 방식 - 함수표현식  방식



// js에서 함수는 일급객체로 취급 됙 때문에 변수 할당이 가능하다
const multiply= function(a,b){
    return a * b;
}


console.log(multiply);

console.log(multiply(3,5));


//ES6 (2015년)에 듣장한 화살표 함수 문법
// 기본시그니쳐 -(파라미터인자)=> {구현로직}
const sub= (a,b)=>{
    return a-b;
};
console.log(sub(5,3));

//화살표함수의 추가 문법
// q 구현부와 로직이 1줄인 경우?{}, return 키워드 생략 가능 
const sub2= (a,b) => a-b;


// q 별도의 파라미터가 없으면 ? 9() 작성은 필수\
//그렇지 않으면 문법 구조가 깨짐
const hello =()=> console.log('hello!!');
hello();

// Q 파라미터가 1개면
const square =(x)=> x*x;// () 생략 가능 
const square2 = x => x*x; 