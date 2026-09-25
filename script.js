let time = document.getElementById("time");
let types = document.querySelectorAll(".type");
let pause = document.getElementById("pause");
let start = false;
let icon = document.getElementById("img");

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
        updateDislpay();
        start = false;
        clearInterval(timer);
        icon.src = "./icons/play_icon.png";
    });
});

// Start Taming:
pause.addEventListener("click", function () {
    if (start === false) {
        if (totalSeconds > 0) {
            start = true;

            icon.src = "./icons/pause_icon.png";

            timer = setInterval(function () {
                totalSeconds--;
                updateDislpay();
                if (totalSeconds === 0) {
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
    }
});
