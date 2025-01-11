let post;
const get = (url) => {  
    console.log('get() started');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log(xhr.response);
            post = JSON.parse(xhr.response); // 상위 스코프에 값을 할당
            return JSON.parse(xhr.response); // 값 그 자체를 반환(?)
        } else {
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    }
    console.log('get() ended');
}
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const getResult = get(url);
console.log(getResult);
console.log(post);

// 비동기 처리결과를 외부에 반환 (13LINe) 하거나 상우스코프 변수에 값을 할당 할수 없다 (12Line)

// 비동기 함수 (get ())의 처리결과 (ex. 서버의 응답 )에 대한 처리는 비동기 함수 내부에서 실행 해야함