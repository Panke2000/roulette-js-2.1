export { balance, checkFunds, fundsPrompt, addValue, subtractValue, updateBalanceValue };
import { loan } from "./loan.js";

let balance = 1000;
const FUNDS = document.querySelector('#funds-window');

function checkFunds(value) {
    return value >= balance;
}

function fundsPrompt() {
    const FUNDS = document.querySelector('#funds-window');
    const DIMMER = document.querySelector('#dimmer');
    if (loan.active) {
        const LOAN_MESSAGE = document.querySelector('#funds-window');
        const LOAN_BUTTON = document.querySelector('.loan-button');
        const RESTART_BUTTON = document.querySelector('#restart-game-over');
        //const CLOSE_BUTTON = document.querySelector('#funds-window .close-button');
        LOAN_MESSAGE.innerHTML = 'GAME OVER! You failed to pay the loan! Press "RESTART" to start a new game.';
        LOAN_BUTTON.classList.toggle('hidden');
        RESTART_BUTTON.classList.toggle('hidden');
    }
    FUNDS.classList.toggle('hidden');
    DIMMER.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}

function updateBalanceValue() {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const BALANCE_VALUE = document.querySelector('#balance-value');
    BALANCE_VALUE.innerHTML = USDollar.format(balance);
}

function addValue(value) {
    balance += value;
    updateBalanceValue();
}

function subtractValue(value) {
    if (balance < value) {
        return false;
    }
    balance -= value;
    updateBalanceValue();
    return true;
}