export { balance, addValue, subtractValue, updateBalanceValue };

let balance = 100;

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
    balance -= value;
    updateBalanceValue();
}