export { loan, getALoan, clearLoan };
import { balance, addValue, subtractValue } from "./balance.js";
import { updateList } from "./bet.js";

let loan = {
    active: false,
    chargeValue: 0,
    chargeRate: 0
};

function setLoan(chargeValue, chargeRate) {
    loan.active = true;
    loan.chargeValue = chargeValue;
    loan.chargeRate = chargeRate;
    document.querySelector('#total-bets').classList.toggle('hidden');
    document.querySelector('#list-loan').classList.toggle('hidden');
}

function menuToggler() {
    if (loan.active === true) {
        document.querySelector('#loan-window').classList.toggle('hidden');
        document.querySelector('#dimmer').classList.toggle('hidden');
    }
    document.querySelector('#loan-window p').classList.toggle('hidden');
    document.querySelector('#loan-window table').classList.toggle('hidden');
    document.querySelector('#active-loan-paragraph').classList.toggle('hidden');
}

function clearLoan() {
    loan.active = false;
    loan.chargeValue = 0;
    loan.chargeRate = 0;
    document.querySelector('#total-bets').classList.toggle('hidden');
    document.querySelector('#list-loan').classList.toggle('hidden');
    menuToggler();
}

function getALoan(option) {
    switch (option) {
        case 1:
            setLoan(50, 15);
            addValue(500);
            updateList();
            menuToggler();
            break;
        case 2:
            setLoan(250, 6);
            addValue(1000);
            updateList();
            menuToggler();
            break;
        case 3:
            setLoan(500, 22);
            addValue(10000);
            updateList();
            menuToggler();
            break;
        case 4:
            setLoan(1000, 30);
            addValue(25000);
            updateList();
            menuToggler();
            break;
        case 5:
            setLoan(1500, 40);
            addValue(50000);
            updateList();
            menuToggler();
            break;
        case 6:
            setLoan(2000, 55);
            addValue(100000);
            updateList();
            menuToggler();
            break;
    
        default:
            break;
    }
}