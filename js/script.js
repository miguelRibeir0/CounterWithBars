const buttons = document.querySelectorAll("button");
const countdown = document.querySelector("h2");
const bars = document.querySelectorAll(".bar");

let number = 0;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0 && number > 0) {
            number--;
        } else if (index === 1 && number < 10) {
            number++;
        }

        updateBars();
        countdown.innerText = number;
    });
});

function updateBars() {
    bars.forEach((bar, index) => {
        if (index < number) {
            if (index >= 8) {
                bar.classList.add("red");
            } else if (index >= 5) {
                bar.classList.add("yellow");
            } else {
                bar.classList.add("green");
            }
        } else {
            bar.classList.remove("red", "yellow", "green");
        }
    });
};