// Generate a random 3-digit customer number
const customerNumber = Math.floor(Math.random() * 900) + 100;

function displayCountdown(count) {
    const countElm = document.getElementById("countdown");
    countElm.style.fontSize = "5rem";
    countElm.style.color = "blue";
    countElm.style.fontFamily = "Arial"; //"sans-serif";
    countElm.innerHTML = `Your Number Is ${customerNumber},  Please Wait For ${count} Seconds`;

    let id = setTimeout(function () {
        if (count == 0) {
            clearTimeout(id);
            countElm.innerHTML = `Your Number Is ${customerNumber},  Please Proceed To The Counter.`;
        } else {
            displayCountdown(count - 1);
        }
    }, 1000);
}

// Display the customer number and start the countdown
displayCountdown(30);
