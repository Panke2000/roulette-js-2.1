import { getALoan, clearLoan } from "./loan.js";
import { betMore, betMax, betLess, betMin, placeBet, undoBet, undoAll } from "./bet.js";

const TABLE = document.querySelector('#table');
const DIMMER = document.querySelector('#dimmer');

const RESTART_BUTTON = document.querySelector('#restart-btn');
const LOAN_BUTTON = document.querySelector('#loan-btn');
const HISTORY_BUTTON = document.querySelector('#history-btn');
const BET_MAX_BUTTON = document.querySelector('#bet-max-btn');
const BET_MIN_BUTTON = document.querySelector('#bet-min-btn');
const BET_PLUS_BUTTON = document.querySelector('#bet-plus-btn');
const BET_MINUS_BUTTON = document.querySelector('#bet-minus-btn');
const BET_CUSTOM_BUTTON = document.querySelector('#bet-custom-btn');
const PAY_LOAN_BUTTON = document.querySelector('#pay-loan-btn');
const UNDO_BET_BUTTON = document.querySelector('#undo-bet-btn');
const UNDO_ALL_BUTTON = document.querySelector('#undo-all-btn');
const INFO_BUTTON = document.querySelector('#info-btn');
const RULES_BUTTON = document.querySelector('#rules-btn');
const SPIN_BUTTON = document.querySelector('#spin');

const SPIN_WHEEL = document.querySelector('#spin_wheel');
const CLOSE_SPINNING = document.querySelector('#spin_wheel .close-button');

const HISTORY = document.querySelector('#history-window');
const CLOSE_HISTORY = document.querySelector('#history-window .close-button');

const FUNDS = document.querySelector('#funds-window');
const FUNDS_LOAN = document.querySelector('#funds-window .loan-button');
const CLOSE_FUNDS = document.querySelector('#funds-window .close-button');

const LOAN = document.querySelector('#loan-window');
const CLOSE_LOAN = document.querySelector('#loan-window .close-button');
const LOAN_OPTION_1 = document.querySelector('#loan-option-1');
const LOAN_OPTION_2 = document.querySelector('#loan-option-2');
const LOAN_OPTION_3 = document.querySelector('#loan-option-3');
const LOAN_OPTION_4 = document.querySelector('#loan-option-4');
const LOAN_OPTION_5 = document.querySelector('#loan-option-5');
const LOAN_OPTION_6 = document.querySelector('#loan-option-6');

const INFO = document.querySelector('#info-window');
const CLOSE_INFO = document.querySelector('#info-window .close-button');

let click_sound = new Audio('/Sources/Audio/click.mp3');
let bet_sound = new Audio('/Sources/Audio/bet.mp3');
let spin_sound = new Audio('/Sources/Audio/spin.mp3');
let win_sound = new Audio('/Sources/Audio/win.mp3');
let lose_sound = new Audio('/Sources/Audio/lose.mp3');
let pay_sound = new Audio('/Sources/Audio/pay.mp3');
function stopSound(sound) {
    sound.pause();
    sound.currentTime = 0;
}

TABLE.addEventListener('click', (e) => {
    if (e.target.tagName == "SPAN" || e.target.tagName == "P") {
        const BET = e.target.parentNode;
        console.log(e.target.parentNode);
        console.log(BET);
        placeBet(BET);
    }  else {
        const BET = e.target;
        console.log(BET);
        placeBet(BET);
    }
});

RESTART_BUTTON.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();

});

LOAN_BUTTON.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();

    LOAN.classList.toggle('hidden');
    DIMMER.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

LOAN_OPTION_1.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
    getALoan(1);
});

LOAN_OPTION_2.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
    getALoan(2);
});

LOAN_OPTION_3.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
    getALoan(3);
});

LOAN_OPTION_4.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
    getALoan(4);
});

LOAN_OPTION_5.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
    getALoan(5);
});

LOAN_OPTION_6.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
    getALoan(6);
});

CLOSE_LOAN.addEventListener('click', (e) => {
    console.log(e.target);
    click_sound.play();
    LOAN.classList.toggle('hidden');
    DIMMER.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

PAY_LOAN_BUTTON.addEventListener('click', (e) => {
    console.log(e.target);
    pay_sound.play();
});

HISTORY_BUTTON.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
    HISTORY.classList.toggle('hidden');
    DIMMER.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

BET_MAX_BUTTON.addEventListener('click', (e) => {
    stopSound(bet_sound);
    console.log(e.target);
    bet_sound.play();
    betMax();
});

BET_MIN_BUTTON.addEventListener('click', (e) => {
    stopSound(bet_sound);
    console.log(e.target);
    bet_sound.play();
    betMin();
});

BET_PLUS_BUTTON.addEventListener('click', (e) => {
    stopSound(bet_sound);
    console.log(e.target);
    bet_sound.play();
    betMore();
});

BET_MINUS_BUTTON.addEventListener('click', (e) => {
    stopSound(bet_sound);
    console.log(e.target);
    bet_sound.play();
    betLess();
});

BET_CUSTOM_BUTTON.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
});

UNDO_BET_BUTTON.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
    undoBet();
});

UNDO_ALL_BUTTON.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
    undoAll();
});

INFO_BUTTON.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();

    INFO.classList.toggle('hidden');
    DIMMER.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

CLOSE_INFO.addEventListener('click', (e) => {
    console.log(e.target);
    click_sound.play();
    INFO.classList.toggle('hidden');
    DIMMER.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

RULES_BUTTON.addEventListener('click', (e) => {
    stopSound(click_sound);
    console.log(e.target);
    click_sound.play();
});

SPIN_BUTTON.addEventListener('click', (e) => {
    stopSound(spin_sound);
    console.log(e.target);
    spin_sound.play();

    SPIN_WHEEL.classList.toggle('hidden');
    DIMMER.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

CLOSE_SPINNING.addEventListener('click', (e) => {
    console.log(e.target);
    click_sound.play();
    SPIN_WHEEL.classList.toggle('hidden');
    DIMMER.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

CLOSE_HISTORY.addEventListener('click', (e) => {
    console.log(e.target);
    click_sound.play();
    HISTORY.classList.toggle('hidden');
    DIMMER.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
});

FUNDS.addEventListener('click', (e) => {
    console.log(e.target);
    click_sound.play();

    if (e.target.value === "CLOSE") {
        FUNDS.classList.toggle('hidden');
        DIMMER.classList.toggle('hidden');
        document.body.classList.toggle('no-scroll');
    }

    if (e.target.value === "GET A LOAN") {
        FUNDS.classList.toggle('hidden');
        LOAN.classList.toggle('hidden');
    }
    
});