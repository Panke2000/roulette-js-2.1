export { placedBets, sum, betHistory, placeBet, undoBet, undoAll, updateList, updateBetValue, clearList, changeBetValue, convertToCurrency, betMore, betMax, betLess, betMin }
import { loan } from "./loan.js";
import { balance } from "./balance.js";
import { numbers } from "./numbers.js";
let placedBets = [];
let sum = 0; // default: 0; Value changes when there is an active loan.
let totalSum;
let betHistory = [];
let currentBetValue = 5;

function checkFunds(value) {
    if (value < balance) {
        return false;
    }
    return true;
}

function convertToCurrency(value) {
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return USDollar.format(value);
}

function updateBetValue() {
    
    const BET_VALUE = document.querySelector('#bet-value');
    BET_VALUE.innerHTML = convertToCurrency(currentBetValue);
}

function changeBetValue(value) {
    currentBetValue = value;
    updateBetValue()
}

function LOG_printArrays() {
    console.log('PLACED BETS:');
    console.log(placedBets);
    console.log('BET HISTORY:');
    console.log(betHistory);
}

function LOG_triggered(name) {
    console.log(name + ' triggered');
}

function betMore() {
    if (currentBetValue < 10) {
        changeBetValue(10);
    } else if (currentBetValue < 20) {
        changeBetValue(20);
    } else if (currentBetValue < 25) {
        changeBetValue(25);
    } else if (currentBetValue < 50) {
        changeBetValue(50);
    } else if (currentBetValue < 100) {
        changeBetValue(100);
    } else if (currentBetValue < 250) {
        changeBetValue(250);
    } else if (currentBetValue < 500) {
        changeBetValue(500);
    } else if (currentBetValue < 1000) {
        changeBetValue(1000);
    } else if (currentBetValue < 2000) {
        changeBetValue(2000);
    } else if (currentBetValue < 5000) {
        changeBetValue(5000);
    }
}

function betMax() {
    changeBetValue(5000);
}

function betLess() {
    if (currentBetValue >= 5000) {
        changeBetValue(2000);
        return;
    } else if (currentBetValue >= 2000) {
        changeBetValue(1000);
        return;
    } else if (currentBetValue >= 1000) {
        changeBetValue(500);
        return;
    } else if (currentBetValue >= 500) {
        changeBetValue(250);
        return;
    } else if (currentBetValue >= 250) {
        changeBetValue(100);
        return;
    } else if (currentBetValue >= 100) {
        changeBetValue(50);
        return;
    } else if (currentBetValue >= 50) {
        changeBetValue(25);
        return;
    } else if (currentBetValue >= 25) {
        changeBetValue(20);
        return;
    } else if (currentBetValue >= 20) {
        changeBetValue(10);
        return;
    } else if (currentBetValue >= 10) {
        changeBetValue(5);
        return;
    }
}

function betMin() {
    changeBetValue(5);
}


function getBetType(bet) {
    switch (bet) {
        case 'first12': case 'second12': case 'third12':
            return 'third';
        case 'red': case 'black':
            return 'color';
        case 'low': case 'high':
            return 'half';
        case 'even': case 'odd':
            return 'even-odd';
    
        default:
            break;
    }
}

function clearList() {
    document.querySelector('#bet-list-body').innerHTML = '';
}

function updateList() {
    clearList();
    const LIST = document.querySelector('#bet-list-body');
    placedBets.forEach(element => {
        let row = LIST.insertRow(-1);
        let cell1 = row.insertCell(-1);
        let cell2 =  row.insertCell(-1);
        let cell3 =  row.insertCell(-1);
        cell1.innerHTML = element.betName;
        cell2.innerHTML = element.betType;
        cell3.innerHTML = convertToCurrency(element.betValue);
    });
    document.querySelector('#bets-value').innerHTML = convertToCurrency(sum);
    document.querySelector('#loan-value').innerHTML = convertToCurrency(loan.chargeValue);
    document.querySelector('#total-value').innerHTML = convertToCurrency(sum + loan.chargeValue);
}

function placeBet_other(bet) {
    LOG_triggered('placeBet_other()');
    let betName = bet;
    let betType = getBetType(bet);

    //check if border was pressed
    if(betType === undefined){
        console.log('Border pressed!');
        return;
    }
    
    let bet_info = {
        betName: betName,
        betValue: currentBetValue,
        betType: betType
    }
    
    betHistory.push({
        betName: betName,
        betValue: currentBetValue,
        betType: betType
    });

    let found = false;
    placedBets.forEach(element => {
        if (element.betName === bet_info.betName) {
            element.betValue += currentBetValue;
            sum += bet_info.betValue;
            totalSum = sum + loan.chargeValue;
            found = true;
        }
    });

    if (!found) {
        placedBets.push({
            betName: betName,
            betValue: currentBetValue,
            betType: betType
        });
        sum += bet_info.betValue;
        totalSum = sum + loan.chargeValue;
    }

    updateList();
    LOG_printArrays();
}

function format(bet) {
    let bet_splited  = bet.split('-');
    return bet_splited;
}

function placeBet_numbers(bet) {
    LOG_triggered('placeBet_numbers()');
    let betName = bet;
    bet = format(bet);
    let betType;
    let expectedNumbers = [];

    for (let i = 0; i < bet.length; i++) {
        if (i === 0) {
            betType = bet[i];
        } else {
            expectedNumbers.push(bet[i]);
        }
    }

    let bet_info = {
        betName: betName,
        betValue: currentBetValue,
        betType: betType,
        expectedNumbers: expectedNumbers
    }

    betHistory.push({
        betName: betName,
        betValue: currentBetValue,
        betType: betType,
        expectedNumbers: expectedNumbers
    });

    if (placedBets.length === 0) {
        placedBets.push({
            betName: betName,
            betValue: currentBetValue,
            betType: betType,
            expectedNumbers: expectedNumbers
        });
        sum += bet_info.betValue;
        totalSum = sum + loan.chargeValue;
    } else {

        let found = false;
        placedBets.forEach(element => {
            if (element.betName === bet_info.betName) {
                element.betValue += currentBetValue;
                sum += bet_info.betValue;
                totalSum = sum + loan.chargeValue;
                found = true;
            }
        });

        if (!found) {
            placedBets.push({
                betName: betName,
                betValue: currentBetValue,
                betType: betType,
                expectedNumbers: expectedNumbers
            });
            sum += bet_info.betValue;
            totalSum = sum + loan.chargeValue;
        }
    }
    
    updateList();
    LOG_printArrays();
}

function placeBet(bet) {
    console.log('placeBet() triggered');
    if (bet.parentNode.classList.contains('number')) {
        placeBet_numbers(bet.classList[0]);
    } else {
        placeBet_other(bet.classList[0]);
    }
}

function undoBet() {
    LOG_triggered('undoBet()');
    if (betHistory.length === 0) {
        return;
    }

    if (placedBets.length === 1) {
        placedBets.pop();
        betHistory.pop();
        sum = 0;
        updateList();
        LOG_printArrays();
        return;
    }

    let bet = betHistory[betHistory.length - 1];
    placedBets.forEach(element => {
        if (element.betName === bet.betName) {
            element.betValue -= bet.betValue;
            sum -= bet.betValue;
            if (element.betValue === 0) {
                const INDEX = placedBets.indexOf(element);
                placedBets.splice(INDEX, 1);
            }
        }
    });

    betHistory.pop();
    updateList();
    LOG_printArrays();
}

function undoAll() {
    LOG_triggered('undoAll()');
    placedBets = [];
    betHistory = [];
    sum = 0;
    LOG_printArrays();
    console.log(sum);
    updateList();
}