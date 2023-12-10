
export { spin };
import { balance, addValue, subtractValue, checkFunds } from "./balance.js";
import { placedBets, totalSum } from "./bet.js";
import { LOG_triggered } from "./_LOGS.js";

let wheel_spin_sound = new Audio('./Sources/Audio/wheel_spin.mp3');

function getRandomNumber() {
    return Math.floor(Math.random() * 37);
}

function spin() {
    LOG_triggered('spin()', 'empty');
    if (!checkFunds()) {
        return;
    }
    
    const OUTPUT_TEXT = document.querySelector('#spinning-display p');
    const OUTPUT_NUMBER = getRandomNumber();
    
    wheel_spin_sound.play();
    setTimeout(() => {
        OUTPUT_TEXT.innerHTML = OUTPUT_NUMBER;
        checkWin(OUTPUT_NUMBER);
    }, 3000);

    console.log(OUTPUT_NUMBER);
}

function checkWin(number) {
    LOG_triggered('checkWin()', number);
    console.log(balance, totalSum);
    /*placedBets.forEach(element => {
        
    });*/
}