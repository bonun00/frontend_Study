//콜백 (Callback)
// 어떤 함수의 인자 값으로 보내지는 함수
// 무언가 발생했을때 실행되는 함수 

function greeting(name){
    console.log(`hello ${name}`)
}

greeting('koo');

function processUserInput(name, callbackFunction){
    callbackFunction(name);//greeting('yoo') ; 와 같다
}

// 콜백 함수 
processUserInput('yoo', greeting);



// 1. 쿠팡에서 사과를 기다리는 함수 

function waitCouping (appleBox,callback){
    console.log(`쿠팡에서 ${appleBox}가 도착했다`);
    callback();
}

const bringitToNeighbor = () => console.log('아주머니에게 전달완료');

waitCouping('사과박스', bringitToNeighbor);

// 쿠팡 도착해야 아주머니엑 전달을 완료 할수 있다.
//작업의 순서 결정 (콜백 패턴) 비동기 콜백

