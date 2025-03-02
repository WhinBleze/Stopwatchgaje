// Variabel untuk penyimpanan waktu
let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

// Ambil elemen dari HTML
const display = document.getElementById("stopwatch");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const notif = document.getElementById("notif");

// Fungsi untuk memformat waktu ke MM:SS:MS
function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let milliseconds = ms % 1000;

    // Format angka agar selalu 2 digit
    let formattedMinutes = String(minutes).padStart(2, "0");
    let formattedSeconds = String(seconds).padStart(2, "0");
    let formattedMilliseconds = String(milliseconds).padStart(3, "0");

    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

// Fungsi untuk memperbarui tampilan stopwatch
function updateDisplay() {
    let currentTime = Date.now() - startTime + elapsedTime;
    display.textContent = formatTime(currentTime);
}

// Event Listener untuk tombol Mulai
startBtn.addEventListener("click", function () {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime; 
        timerInterval = setInterval(updateDisplay, 10);
        isRunning = true;
        notif.textContent = "Stopwatch berjalan...";
    }
});

// Event Listener untuk tombol Berhenti
stopBtn.addEventListener("click", function () {
    if (isRunning) {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        notif.textContent = "Stopwatch berhenti.";
    }
});

// Event Listener untuk tombol Reset
resetBtn.addEventListener("click", function () {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:000";
    notif.textContent = "Stopwatch direset.";
});
