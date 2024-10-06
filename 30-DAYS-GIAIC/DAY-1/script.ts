let countdown: number | null = null;
let time: number = 3600; 
let isPaused: boolean = false; 

function updateTimer(): void {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = time % 60;
    const hours: number = Math.floor(minutes / 60);
    const displayMinutes: number = minutes % 60;
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
    } else {
        time--;
    }
}

function formatTime(t: number): string {
    return t < 10 ? `0${t}` : t.toString();
}

document.getElementById("edit-timer")?.addEventListener("click", () => {
    const newTime = prompt("Enter the time in minutes:");
    if (newTime !== null) {
        time = parseInt(newTime) * 60;
        updateTimer();
    }
});

document.getElementById("reset")?.addEventListener("click", () => {
    if (countdown !== null) {
        clearInterval(countdown);
    }
    time = 3600; 
    updateTimer();
});

document.getElementById("stop")?.addEventListener("click", () => {
    if (countdown !== null) {
        clearInterval(countdown);
        isPaused = true; 
    }
});

document.getElementById("start")?.addEventListener("click", () => {
    if (isPaused) {
        startCountdown(); 
        isPaused = false;
    }
});

function startCountdown(): void {
    if (countdown !== null) {
        clearInterval(countdown);
    }
    countdown = window.setInterval(updateTimer, 1000);
}


startCountdown();
