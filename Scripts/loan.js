export { loan, getALoan, clearLoan };
import { balance } from "./balance.js";

let loan = {
    active: false,
    chargeValue: 0,
    chargeRate: 0
};

function setLoan(chargeValue, chargeRate) {
    loan.active = true;
    loan.chargeValue = chargeValue;
    loan.chargeRate = chargeRate;
}

function menuToggler(state) {
    const PARAGRAPH = document.querySelector('#loan-window p');
    const TABLE = document.querySelector('#loan-window table');
    const ACTIVE_LOAN = document.querySelector('#active-loan-paragraph');
    if (state === true) {
        PARAGRAPH.classList.remove('hidden');
        TABLE.classList.remove('hidden');
        ACTIVE_LOAN.classList.add('hidden');
    } else {
        PARAGRAPH.classList.add('hidden');
        TABLE.classList.add('hidden');
        ACTIVE_LOAN.classList.remove('hidden');
    }
}

function clearLoan() {
    loan.active = false;
    loan.chargeValue = 0;
    loan.chargeRate = 0;
    menuToggler(false);
}

function getALoan(option) {
    switch (option) {
        case 1:
            setLoan(50, 15);
            menuToggler(true);
            break;
        case 2:
            setLoan(250, 6);
            menuToggler(true);
            break;
        case 3:
            setLoan(500, 22);
            menuToggler(true);
            break;
        case 4:
            setLoan(1000, 30);
            menuToggler(true);
            break;
        case 5:
            setLoan(1500, 40);
            menuToggler(true);
            break;
        case 6:
            setLoan(2000, 55);
            menuToggler(true);
            break;
    
        default:
            break;
    }
}