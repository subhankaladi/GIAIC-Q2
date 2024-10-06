"use strict";
var _a, _b, _c, _d;
let countdown = null;
let time = 3600;
let isPaused = false;
function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const hours = Math.floor(minutes / 60);
    const displayMinutes = minutes % 60;
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.textContent = `${formatTime(hours)}:${formatTime(displayMinutes)}:${formatTime(seconds)}`;
    }
    if (time <= 0) {
        if (countdown !== null) {
            clearInterval(countdown);
        }
        time = 3600;
        updateTimer();
    }
    else {
        time--;
    }
}
function formatTime(t) {
    return t < 10 ? `0${t}` : t.toString();
}
(_a = document.getElementById("edit-timer")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const newTime = prompt("Enter the time in minutes:");
    if (newTime !== null) {
        time = parseInt(newTime) * 60;
        updateTimer();
    }
});
(_b = document.getElementById("reset")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    if (countdown !== null) {
        clearInterval(countdown);
    }
    time = 3600;
    updateTimer();
});
(_c = document.getElementById("stop")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    if (countdown !== null) {
        clearInterval(countdown);
        isPaused = true;
    }
});
(_d = document.getElementById("start")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    if (isPaused) {
        startCountdown();
        isPaused = false;
    }
});
function startCountdown() {
    if (countdown !== null) {
        clearInterval(countdown);
    }
    countdown = window.setInterval(updateTimer, 1000);
}
startCountdown();
