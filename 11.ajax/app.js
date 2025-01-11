
//1. Ajax API인 XMLHttpRequest() 인스턴트(객체) 생성

const xhr =new XMLHttpRequest();

console.log(xhr);

//2.서버로부터의 응답이 완료 되었는지 확인 
// 로드 되었을 경우 동작할 이벤트 로직 을 함수 형태로 추가 
 
xhr.onload=()=> {//객체가 가진 프로퍼티 기반으로 이벤트 추가
    
    
    //요청 처리가 완료 되었고 상태코드가 200인 경우
    if(xhr.readyState === xhr.DONE && xhr.status===200){
        const responseData = xhr.responseText;

        const pasredData= JSON.parse(responseData)
        console.log(pasredData);
    }

// 직렬화 , 역직렬화 // 지금하는하는건 역직렬화 !!

}

// 3, 실제 요청 준비하는 코드(open())

const RQUEST_URL = 'https://jsonplaceholder.typicode.com/users/1';
xhr.open('GET', RQUEST_URL);

//4. 실제 요청 전송

xhr.send();