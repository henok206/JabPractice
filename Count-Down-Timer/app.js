const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinEl = document.querySelector(".timer__min");
const timerSecEl = document.querySelector(".timer__sec");

function getTimeDifference(start, end) {
    let millisecond = Math.floor(end - start);
    let seconds = Math.floor(millisecond / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    //     //return days + " " + hours + " " + minutes + " " + seconds;
    return {
        rDay: days,
        rHours: hours,
        rMinute: minutes,
        rSecond: seconds,
    };
}

// //console.log(getTimeDifference(startDate, endDate));

let Timer = setInterval(function () {
    const startDate = new Date();
    const endDate = new Date("April 24,2023,7:30:00");
    let timeDifferenceObj = getTimeDifference(startDate, endDate);
    timerDayEl.textContent = timeDifferenceObj.rDay;
    timerHourEl.textContent = timeDifferenceObj.rHours;
    timerMinEl.textContent = timeDifferenceObj.rMinute;
    timerSecEl.textContent = timeDifferenceObj.rSecond;
}, 1000);
