// //1.자바스크립트에서 셀렉트 박스(<select>)를 사용할수 있게 app.js 로 가져와야함 // 가져오는 게 뭘까 생각해봐야함
// document.getElementById("cookie");
// <select id=​"cookie">​…​</select>​
// const select =document.getElementById("cookie");


// //2.가져온 select a박스에 이벤트를 주어야함 -->
// <!-- 이벤트 셀렉트 박스 값이 변경되었다는 것을 감지할 이벤트
// 사용자가 셀렉스 박스값을 변경할때마다 동작시키고 싶은 로직 이벤트 -->
// <!-- //3. 처리 되 ㄴ결과를 페이지에 출력 -->



const selectButton =document.getElementById("cookie");

const resultText = document.getElementById('result');


// /변경이 발생했을때 수행할 함수
function changeHandler(){
    console.log('변경 이벤트가 발생됨');
    const choice = selectButton.value;
    console.log(choice)
    if(choice==='one'){
        console.log('한대');
    }else if(choice ==='two'){
        console.log('두대');
    }else{
        console.log('안돼');
        
    }

}
//동기와 비동기 차이


//이벤트 종류, 타입  이벤트 발생시 동작 시킬수 있는 코드(비동기 함수주 앟나)
selectButton.addEventListener('change', changeHandler)

//얘도 콜백 함수이다 버튼으 눌렀을대 코드를 호출 