export { loan, getLoan, payLoan, clearLoan };
import { balance, addValue, subtractValue } from "./balance.js";
import { updateList, convertToCurrency } from "./bet.js";

let loan = {
    active: false,
    chargeValue: 0,
    chargeRate: 0,
    value: 0
};

function setLoan(chargeValue, chargeRate, value) {
    loan.active = true;
    loan.chargeValue = chargeValue;
    loan.chargeRate = chargeRate;
    loan.value = value;
    document.querySelector('#total-bets').classList.toggle('hidden');
    document.querySelector('#list-loan').classList.toggle('hidden');
    document.querySelector('#pay-loan-btn').classList.toggle('hidden');
    document.querySelector('#left-to-pay').childNodes[1].innerHTML = convertToCurrency(loan.value);
    console.log(document.querySelector('#left-to-pay'));
}

function menuToggler() {
    if (loan.active === true) {
        document.querySelector('#loan-window').classList.toggle('hidden');
        document.querySelector('#dimmer').classList.toggle('hidden');
        document.body.classList.toggle('no-scroll');
    }
    document.querySelector('#loan-window p').classList.toggle('hidden');
    document.querySelector('#loan-window table').classList.toggle('hidden');
    document.querySelector('#active-loan-paragraph').classList.toggle('hidden');
    document.querySelector('#left-to-pay').classList.toggle('hidden');
}

function clearLoan() {
    loan.active = false;
    loan.chargeValue = 0;
    loan.chargeRate = 0;
    loan.value = 0;
    document.querySelector('#total-bets').classList.toggle('hidden');
    document.querySelector('#list-loan').classList.toggle('hidden');
    document.querySelector('#pay-loan-btn').classList.toggle('hidden');
    menuToggler();
}

function payLoan() {
    let payment = subtractValue(loan.value);
    if (payment === false) {
        console.log(false);
        console.log('balance: ' + balance);
    } else {
        console.log(true);
        console.log('balance: ' + balance);
        clearLoan();
    }
}

function getLoan(option) {
    switch (option) {
        case 1:
            setLoan(50, 15, 750);
            addValue(500);
            updateList();
            menuToggler();
            break;
        case 2:
            setLoan(250, 6, 1250);
            addValue(1000);
            updateList();
            menuToggler();
            break;
        case 3:
            setLoan(500, 22, 11000);
            addValue(10000);
            updateList();
            menuToggler();
            break;
        case 4:
            setLoan(1000, 30, 30000);
            addValue(25000);
            updateList();
            menuToggler();
            break;
        case 5:
            setLoan(1500, 40, 60000);
            addValue(50000);
            updateList();
            menuToggler();
            break;
        case 6:
            setLoan(2000, 55, 110000);
            addValue(100000);
            updateList();
            menuToggler();
            break;
    
        default:
            break;
    }
}