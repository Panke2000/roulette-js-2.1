export { balance, checkFunds, addValue, subtractValue, updateBalanceValue };

let balance = 1000;

function checkFunds(value) {
    return value >= balance;
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
    if (balance <= value) {
        return false;
    }
    balance -= value;
    updateBalanceValue();
    return true;
}