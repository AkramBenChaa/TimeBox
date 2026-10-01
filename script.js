// Retrieving items:
let time = document.getElementById("time");
let types = document.querySelectorAll(".type");
let pause = document.getElementById("pause");
let focus = document.getElementById("this_is_focus");
let icon = document.getElementById("img");
let replay = document.getElementById("replay");
let nav = document.querySelectorAll(".navType");

// Audio Generation:
let timeTypeSound = new Audio("./sounds/time_type_sound.wav");
let sound = new Audio("./sounds/time_end_sound.mp3");
let clickSound = new Audio("./sounds/click_sound.wav");
let rain = new Audio("./sounds/rain_sound.mp3");
let fire = new Audio("./sounds/fire_sound.mp3");
let Forest = new Audio("./sounds/Forest_sound.mp3");

// Basic variables:
let start = false;
let numberOfSound = 1;
let thisType = focus;
let totalSeconds = 25 * 60;
let timer;
let endTime;
let startTime;
let imageNumber = 8;

// Display Time:
function updateDislpay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    if (thisType.dataset.time === "00") {
        // For Stopwatch
        time.textContent =
            String(hours).padStart(2, "0") +
            ":" +
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");
    } else {
        // For other times
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
        // Change The Color Of The Selected Time:
        types.forEach(function (type) {
            type.classList.remove("clickType");
        });
        type.classList.add("clickType");
        updateDislpay();
    });
});

// Start Taming:
pause.addEventListener("click", function () {
    if (start === false) {
        if (thisType.dataset.time === "00") {
            icon.src = "./icons/pause_icon.png";
            start = true;
            startTime = Date.now() - totalSeconds * 1000;
            timer = setInterval(function () {
                totalSeconds = Math.floor((Date.now() - startTime) / 1000);
                updateDislpay();
            }, 1000);
        } else {
            if (totalSeconds > 0) {
                start = true;
                icon.src = "./icons/pause_icon.png";

                clickSound.play();
                clickSound.currentTime = 0;

                endTime = Date.now() + totalSeconds * 1000;

                timer = setInterval(function () {
                    totalSeconds = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
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

// Side Bar Button:
nav.forEach(function (item) {
    item.addEventListener("click", function () {
        switch (this.id) {
            case "btn-goal":
                goalButton();
                break;

            case "btn-sound":
                startSound();
                break;

            case "btn-img":
                changeBackground();
                break;

            case "btn-note":
                noteButton();
                break;

            case "btn-ai":
                aiButton();
                break;
        }
    });
});

// Change Image Function:
function changeBackground() {
    if (imageNumber < 10) {
        imageNumber++;
        document.body.style.backgroundImage = `url(./imgs/${imageNumber}.jpg)`;
    } else {
        imageNumber = 1;
        document.body.style.backgroundImage = `url(./imgs/${imageNumber}.jpg)`;
    }
}

// Sound Function:
function startSound() {
    switch (numberOfSound) {
        case 1:
            rain.currentTime = 0;
            rain.loop = true;
            rain.play();
            numberOfSound++;
            break;
        case 2:
            rain.pause();
            fire.currentTime = 0;
            fire.loop = true;
            fire.play();
            numberOfSound++;
            break;
        case 3:
            fire.pause();
            Forest.currentTime = 0;
            Forest.loop = true;
            Forest.play();
            numberOfSound++;
            break;
        case 4:
            Forest.pause();
            numberOfSound = 1;
            break;
    }
}

// AI Button:
function aiButton() {
    Swal.fire({
        title: "Coming Soon",
        text: "The AI feature is currently under development.",
        icon: "info",
        confirmButtonText: "OK",
    });
}

// Goal Boutton:
function goalButton() {
    Swal.fire({
        title: "Coming Soon",
        text: "The Goal feature is currently under development.",
        icon: "info",
        confirmButtonText: "OK",
    });
}

// Note Boutton:
function noteButton() {
    Swal.fire({
        title: "Coming Soon",
        text: "The Note feature is currently under development.",
        icon: "info",
        confirmButtonText: "OK",
    });
}

// Change Color:
time.addEventListener("click", function () {
    time.classList.toggle("clickType");
});
