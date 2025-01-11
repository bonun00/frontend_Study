// 콜백 패턴을 활용해서 바꾼 결과
function a( callback ) {
	setTimeout( () => {
        console.log( 'a() called' );
        callback(); 
    }, 1000 ); // 1 second delay
}

function b( callback ) {
	setTimeout( () => {
        console.log( 'b() called' );
        callback();
    }, 500 ); // 0.5 second delay
}

function c( callback ) {
	setTimeout( () => {
        console.log( 'c() called' );
        callback();
    }, 1200 ); // 1.1 second delay
}

a( () => {
    console.log('a() is done!')
    // a()의 인수로 전달된 콜백 안에서 b()호출
    b( () => {console.log('b() is done!') 
        c( () => console.log('c() is done!') );
    });

} );// 콜백 헬 (가독성, 코드이해도 저하, 예외처리 어려움)

