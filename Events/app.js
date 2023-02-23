let mybuttonElm = document.querySelector("button");
let myInputElm = document.querySelector("input");

mybuttonElm.addEventListener("click", function () {
    mybuttonElm.style.backgroundColor = "blue";
    mybuttonElm.style.color = "#ffffff";
    mybuttonElm.style.borderWidth = "10px";
});

myInputElm.addEventListener("input", function () {
    myInputElm.style.borderColor = "blue";
    myInputElm.style.color = "#222";
    myInputElm.style.borderWidth = "10px";
});
