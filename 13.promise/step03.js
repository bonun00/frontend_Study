// executor라는 콜백에 비동기 처리 코드를 작성하면 됨
const executor = (resolve, reject) => {// executor의 인수로 resolve, reject 콜백 전달
    const xhr = new XMLHttpRequest();
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            //응답 성공시 
            resolve(JSON.parse(xhr.response));
        } else {
            console.error(xhr.status);
            reject(new Error('응답 실패'));
        }
    }
};

const myPromise = new Promise(executor);
console.dir(myPromise);

// then() - resolve 되엇을 경우 후속 처리를 수행 할수 있는 함수 
myPromise.then(result => {
    console.log(result);
    console.log(myPromise);
} )

