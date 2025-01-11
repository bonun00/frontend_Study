function a(callback) {
    setTimeout(aCallback, 1000);
    callback();
}

function aCallback() {
    console.log('a() called');
    
}

function b(callback) {
    setTimeout(bCallback, 500);
    callback();
}

function bCallback() {
    console.log('b() called');
}

function c(callback) {
    setTimeout(() => {console.log('c() called');
        callback();
    }, 1200);
}

function cCallback() {
    console.log('c() called');
}



function print (){
console.log('a() is done');
}
a(print);


function print2 (){
    console.log('b() is done');
    }
b(print2);
function print3 (){
    console.log('c() is done');
    }
c(print3);

function a() {
    setTimeout(aCallback, 1000);
}

function aCallback() {
    console.log('a() called');
}

function b() {
    setTimeout(bCallback, 500);
}

function bCallback() {
    console.log('b() called');
}

function c() {
    setTimeout(() => console.log('c() called'), 1200);
}

function cCallback() {
    console.log('c() called');
}

a();
console.log('a() is done');
b();
console.log('b() is done');
c();
console.log('c() is done');




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

a( () =>console.log('a() is done!'));
b( () => console.log('b() is done!') );
c( () => console.log('c() is done!') );



// 콜백 패턴을 적용했지만 셋타임함수에의해 bac 순서로 호출되어 동작하게됨
// 우리가 원하는건 a b c 순서로 호출되고 완료되어야 한다는 것. step04 에서 해결


// function a() {
//     console.log('one');
//   }
  
//   function b() {
//     console.log('three');
//   }
  
//   a();
//   setTimeout(() => {
//     console.log('two');a
//   }, 0);
//   b();
//https://www.jsv9000.app/
  