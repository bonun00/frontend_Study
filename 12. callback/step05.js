let g =0; 

function setGWith100(){
    console.log('setG() called');


    setTimeout(()=>{
        g=100; // g의 값을 100으로 변경
        console.log("엥");
        
    },1000)
    // 셋타입 아웃 은 비동기 함수 로 아이디만 반환 하고 바로 넘어간다  테스크 큐에다가 쌓아둔다 
    console.log("setG done");


    return g;

}

const result = setGWith100();

console.log(result);
console.log(g);