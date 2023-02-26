const loadingBarItem = document.querySelector(".loading-bar__item");
const container = document.querySelector(".container");
const button30 = document.querySelector("#button30");
const button60 = document.querySelector("#button60");
const button100 = document.querySelector("#button100");

// let width = 1;
// let counter;
// let loadingBar = setInterval(function () {
//     if (width >= 100) {
//         clearInterval(loadingBar);
//     } else {
//         width++;
//         loadingBarItem.style.width = width + "%";
//     }
// }, 100);
button30.addEventListener("click", () => {
    container.style.width = "30%";
});

button60.addEventListener("click", () => {
    container.style.width = "60%";
});

button100.addEventListener("click", () => {
    container.style.width = "100%";
});
