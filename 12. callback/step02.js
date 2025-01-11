// function a() {
//         setTimeout(() => console.log('a() called'), 1000);
//     }
    
//     a();
//     console.log('a() is done');


    // 실행 결과오는 반대로 동작하게 하려면

    function a(callback) {
        setTimeout(() =>{
            console.log('a() called');
            callback();}
    );
    
    }
    
    function print (){
        console.log('a() is done');
    }

    a(print);
