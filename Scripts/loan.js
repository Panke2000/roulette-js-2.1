export { loan, getALoan, clearLoan };
import { balance } from "./balance.js";
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
    menuToggler();
}

function getALoan(option) {
    switch (option) {
        case 1:
            setLoan(50, 15);
            updateList();
            menuToggler();
            break;
        case 2:
            setLoan(250, 6);
            updateList();
            menuToggler();
            break;
        case 3:
            setLoan(500, 22);
            updateList();
            menuToggler();
            break;
        case 4:
            setLoan(1000, 30);
            updateList();
            menuToggler();
            break;
        case 5:
            setLoan(1500, 40);
            updateList();
            menuToggler();
            break;
        case 6:
            setLoan(2000, 55);
            updateList();
            menuToggler();
            break;
    
        default:
            break;
    }
}