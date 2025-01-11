const executor=()=>{};

//promist 객체 생성후 생성자의 인수로 콜백 함수 전달
const myPromise =new promise (executor);
console.log(myPromise);

//pending - 요청 처리르 아직 수행 하지 못한 상태 