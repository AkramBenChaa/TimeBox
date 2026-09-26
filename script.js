let time = document.getElementById("time");
let types = document.querySelectorAll(".type");
let pause = document.getElementById("pause");
let start = false;
let icon = document.getElementById("img");
let sound = new Audio("./sounds/time_end_sound.mp3");
let timeTypeSound = new Audio("./sounds/time_type_sound.wav");
let clickSound = new Audio("./sounds/click_sound (2).wav");
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
        timeTypeSound.play();
        timeTypeSound.currentTime = 0;
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
            clickSound.currentTime = 0;
            timer = setInterval(function () {
                totalSeconds--;
                updateDislpay();
                if (totalSeconds === 0) {
                    sound.play();
                    time.className = "onclick_class";
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
        clickSound.currentTime = 0;
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
    clickSound.currentTime = 0;
});
