let count = 0;
const counter = document.getElementById("counter");

document.querySelector(".decrease").addEventListener("click", () => {
    count--;
    updateCounter();
});

document.querySelector(".reset").addEventListener("click", () => {
    count = 0;
    updateCounter();
});

document.querySelector(".increase").addEventListener("click", () => {
    count++;
    updateCounter();
});

function updateCounter() {
    counter.textContent = count;
}