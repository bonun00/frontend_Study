function first(){
    console.log('After 3 seconds...first called()');
}

function second(){
    console.log('second called()');
}


setTimeout(first,3000);
//셋타임 아웃 함수 자체가 비동기 실행하도록 도와준다 


// 현재 실행중인 작업이 완수되지 않아도 다음 작없을 곧바로 수행 가능 -> 비동기로 동작
// 스레드가 차단 되지 않고, 다음 작업을 수행 할  수 있다.
// -> 브라우저에서 제공하는 web api 활용 했기 때문이다.
second();


