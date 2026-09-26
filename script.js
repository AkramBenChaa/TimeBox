let time = document.getElementById("time");
let types = document.querySelectorAll(".type");
let pause = document.getElementById("pause");
let start = false;
let icon = document.getElementById("img");
let sound = new Audio("./sounds/time_end_sound.mp3");
let clickSound = new Audio("./sounds/click_sound.wav");
let replay = document.getElementById("replay");
let thisType = 25 * 60;

// Start timer:
let totalSeconds = 25 * 60;
let timer;

// Display Time:
function updateDislpay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    time.textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

// Change Time Type In Display:
types.forEach(function (type) {
    type.addEventListener("click", function () {
        totalSeconds = Number(type.dataset.time) * 60;
        thisType = type;
        updateDislpay();
        start = false;
        clearInterval(timer);
        icon.src = "./icons/play_icon.png";
    });
});

// Start Taming:
pause.addEventListener("click", function () {
    clickSound.play();
    if (start === false) {
        if (totalSeconds > 0) {
            start = true;
            icon.src = "./icons/pause_icon.png";
            clickSound.play();
            timer = setInterval(function () {
                totalSeconds--;
                updateDislpay();
                if (totalSeconds === 0) {
                    sound.play();
                    clearInterval(timer);
                    start = false;
                    icon.src = "./icons/pause_icon.png";
                }
            }, 1000);
        }
    } else {
        start = false;
        clearInterval(timer);
        icon.src = "./icons/play_icon.png";
        clickSound.play();
    }
});

// Replay Button:
replay.addEventListener("click", function () {
    clearInterval(timer);
    console.log(thisType);
    if (thisType === 1500) {
        totalSeconds = 25 * 60;
    } else {
        totalSeconds = Number(thisType.dataset.time) * 60;
    }
    updateDislpay();
    start = false;
    icon.src = "./icons/play_icon.png";
    clickSound.play();
});
