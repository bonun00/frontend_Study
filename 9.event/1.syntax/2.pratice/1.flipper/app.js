// 버튼 클릭 시 색이 변경되는 기능

// 1. 버튼 클릭하면 (콜백) 함수가 동작
// 1-1. HTML <button>을 JS로 가져와야 함
const button = document.getElementById('btn');
const color = document.getElementById('color');

// 1-2. 가져온 button에 마우스를 클릭하는 'click' 이벤트 추가
// const clickHandler = () => console.log('button clicked!');
// button.addEventListener('click', clickHandler);

button.addEventListener('click', () => {
    // 2. 콜백 함수는 색을 변경하는 로직이 필요

    // Before
    // const red = getRandomNumber(0, 255)[0];
    // const green = getRandomNumber(0, 255)[1];

    // After, 디스트럭쳐링(Destructuring), (배열이나 객체의) 구조(를) 분해 (후 변수에) 할당
    const [red, green, blue] = getRandomNumber(0, 255);
    console.log(red, green, blue); // red, green, blue를 개별 변수로 바로 활용 가능
    
    // rgb(255, 255, 255)과 같은 형태로 css에 스타일링을 해줘야함
    const rgbColor=  `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = rgbColor;
    color.style.color=rgbColor;
    color.textContant=rgbColor;
});

// 랜덤값 추출
function getRandomNumber(min, max) {
    const randomRGBArray = [];

    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * ( max - min + 1)) + min;
        randomRGBArray.push(randomNumber);
    }

    return randomRGBArray; // 반환값은 개별 랜덤값이 아닌 배열
}













// // 버튼 클릭시 색이 변경되는 기능 

// //1. 버튼 클릭하면 (콜백 함수가 동작)

// //1-1 HTML <button>을 js로 가져와야함
// const button =document.getElementById("btn");

// //1-2 가져온 버튼에 마우스륵 클릭하는 클릭 이벤트 추가

// // const clickHandler =() => console.log("버튼 클릭");

// // button.addEventListener(clixk.clickHandler);

// button.addEventListener(click,() => {

//     console.log(getRandomNumber(0.255));

//   //비포
//   //const red= getRandomNumber(0,255)[0]

//   //에프터 디스트럭처링  (배열이나 객체의)구조를 분해 (후에 변수에) 할당

//   const [red,green, blue]=getRandomNumber(0,255);
//   console.log(red,green,blue);// red green blue 를 개별 변수로 바로 활용 가능 

//   document.body.style.backgroundColor=`rgb${red}${green}${blue}`
// });

// //2. 콜백 함수는 색을 변하는 로직
// // 랜덤값 추출
// function getRandomNumber(min, max) {
//     const randomRGBArray = [];

//     for (let i = 0; i < 3; i++) {
//         const randomNumber = Math.floor(Math.random() * ( max - min + 1)) + min;
//         randomRGBArray.push(randomNumber);
//     }

//     return randomRGBArray; // 반환값은 개별 랜덤 값이 아닌 배열 
// }






// const myButton = document.getElementById('myButton');
// const colorName = document.getElementById('colorName');

// const colors = [
//   { name: 'Red', rgb: 'rgb(255, 0, 0)' },
//   { name: 'Blue', rgb: 'rgb(0, 0, 255)' },
//   { name: 'Green', rgb: 'rgb(0, 255, 0)' },
//   { name: 'Yellow', rgb: 'rgb(255, 255, 0)' },
//   { name: 'Purple', rgb: 'rgb(128, 0, 128)' },
//   { name: 'Orange', rgb: 'rgb(255, 165, 0)' },
//   { name: 'Pink', rgb: 'rgb(255, 192, 203)' }
// ];

// let currentIndex = 0;

// // 버튼 클릭 이벤트 리스너 추가
// myButton.addEventListener('click', () => {
//     // 다음 색상 가져오기 
//     const currentColor = colors[currentIndex]; 
    
//     // body 배경색 변경
//     document.body.style.backgroundColor = currentColor.rgb;
    
//     // 텍스트 업데이트
//     colorName.innerText = `Background Color: ${currentColor.name} ${currentColor.rgb}`;
    
//     // 색상 인덱스 순환
//     currentIndex = (currentIndex + 1) % colors.length;
// });