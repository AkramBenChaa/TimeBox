let time = document.getElementById("time");
let types = document.querySelectorAll(".type");
let pause = document.getElementById("pause");
let focus = document.getElementById("this_is_focus");
let icon = document.getElementById("img");
let replay = document.getElementById("replay");

let timeTypeSound = new Audio("./sounds/time_type_sound.wav");
let sound = new Audio("./sounds/time_end_sound.mp3");
let clickSound = new Audio("./sounds/click_sound (2).wav");

let start = false;
let thisType = focus;
let totalSeconds = 25 * 60;
let timer;

// Display Time:
function updateDislpay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    if (thisType.dataset.time === "00") {
        time.textContent =
            String(hours).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");
    } else {
        time.textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    }
}

// Change Time Type In Display:
types.forEach(function (type) {
    type.addEventListener("click", function () {
        timeTypeSound.play();
        timeTypeSound.currentTime = 0;
        clearInterval(timer);
        totalSeconds = Number(type.dataset.time) * 60;
        thisType = type;
        start = false;
        icon.src = "./icons/play_icon.png";
        updateDislpay();
    });
});

// Start Taming:
pause.addEventListener("click", function () {
    if (start === false) {
        if (thisType.dataset.time === "00") {
            icon.src = "./icons/pause_icon.png";
            timer = setInterval(function () {
                start = true;
                totalSeconds++;
                updateDislpay();
            }, 1000);
        } else {
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
                        clearInterval(timer);
                        icon.src = "./icons/play_icon.png";
                        start = false;
                    }
                }, 1000);
            }
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
    totalSeconds = Number(thisType.dataset.time) * 60;
    updateDislpay();
    start = false;
    icon.src = "./icons/play_icon.png";
    clickSound.play();
    clickSound.currentTime = 0;
});
