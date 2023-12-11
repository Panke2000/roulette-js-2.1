
export { spin };
import { balance, addValue, subtractValue, checkFunds } from "./balance.js";
import { placedBets, totalSum } from "./bet.js";
import { LOG_triggered } from "./_LOGS.js";
import { numbers } from "./numbers.js";

let wheel_spin_sound = new Audio('./Sources/Audio/wheel_spin.mp3');
const OUTPUT_TEXT = document.querySelector('#spinning-display p');
const OUTPUT_NUMBER = getRandomNumber();
const CLOSE_SPIN = document.querySelector('#spin_wheel .close-button');
const WAIT_MESSAGE = document.querySelector('#spin_wheel_message');

function getRandomNumber() {
    return Math.floor(Math.random() * 37);
}

function spin() {
    LOG_triggered('spin()', 'empty');
    if (checkFunds()) {
        return;
    }
    
    wheel_spin_sound.play();
    setTimeout(() => {
        OUTPUT_TEXT.innerHTML = OUTPUT_NUMBER;
        checkWin(OUTPUT_NUMBER);
        if (numbers[OUTPUT_NUMBER].color === 'red') {
            document.querySelector('#spinning-display').style.backgroundColor = 'var(--color-red)';
        } else if (numbers[OUTPUT_NUMBER].color === 'black') {
            document.querySelector('#spinning-display').style.backgroundColor = 'var(--color-black)';
        } else {
            document.querySelector('#spinning-display').style.backgroundColor = 'var(--color-green)';
        }
        CLOSE_SPIN.classList.remove('hidden');
        WAIT_MESSAGE.classList.add('hidden');
    }, 3500);

    console.log(OUTPUT_NUMBER);
}
    


function checkWin(number) {
    LOG_triggered('checkWin()', number);
    console.log(balance, totalSum);
    /*placedBets.forEach(element => {
        
    });*/
}