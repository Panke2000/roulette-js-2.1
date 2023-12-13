export { placedBets, sum, totalSum, betHistory, numberHistory, newGame, placeBet, undoBet, undoAll, updateList, updateBetValue, clearList, changeBetValue, convertToCurrency, betMore, betMax, betLess, betMin }
import { loan } from "./loan.js";
import { balance, checkFunds } from "./balance.js";
import { numbers } from "./numbers.js";
import { LOG_triggered, LOG_printArrays } from "./_LOGS.js";

let placedBets = [];
let sum = 0; // default: 0; Value changes when there is an active loan.
let totalSum;
let betHistory = [];
let numberHistory = [];
let currentBetValue = 5;

function updateHistoryStyle() {
    LOG_triggered('updateHistoryStyle()', 'empty');
    let list = document.querySelectorAll('#history div');

    let index = 0;
    list.forEach(element => {
        let number = list[index].innerHTML;

        if (numbers[number].color === 'red') {

            list[index].style.backgroundColor = 'var(--color-red)';
            list[index].style.border = '2px solid var(--color-yellow)';

        } else if (numbers[number].color === 'black') {

            list[index].style.backgroundColor = 'var(--color-black)';
            list[index].style.border = '2px solid var(--color-yellow)';

        } else {

            list[index].style.backgroundColor = 'var(--color-green)';
            list[index].style.border = '2px solid var(--color-yellow)';

        }
        index++;
    });
    list[list.length - 1].style.border = '5px solid var(--color-yellow)';
}

function updateHistory(number) {
    //console.log(numberHistory);
    LOG_triggered('updateHistory()', number);

    if (numberHistory.length == 10) {
        console.log('history > 10');
        let list = document.querySelectorAll('#history div');
        console.log(list);

        for (let index = 0; index < list.length; index++) {
            if (index === 9) {
                numberHistory[9] = numbers[number];
                list[index].innerHTML = numbers[number].value;
            } else {
                numberHistory[index] = numberHistory[index + 1];
                list[index].innerHTML = numberHistory[index + 1].value;
            }
        }
        console.log(numberHistory);

        updateHistoryStyle();
        return;
    }

    if(numberHistory.length >= 1 && numberHistory.length < 10) {
        numberHistory.push(numbers[number]);
        let div = document.createElement('div');
        div.innerHTML = number;

        document.querySelector('#history').appendChild(div);

        updateHistoryStyle();
        return;
    }

    if (numberHistory.length == 0) {
        let noHistory = document.querySelector('#history p');
        noHistory.classList.add('hidden');

        numberHistory.push(numbers[number]);
        let div = document.createElement('div');
        div.innerHTML = number;

        document.querySelector('#history').appendChild(div);

        updateHistoryStyle();
        return;
    }
}

function newGame(previousNumber) {
    LOG_triggered('newGame()', previousNumber);
    placedBets = [];
    betHistory = [];
    updateHistory(previousNumber);
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

function betMore() {
    if (currentBetValue < 10) {
        changeBetValue(10);
        return;
    } else if (currentBetValue < 20) {
        changeBetValue(20);
        return;
    } else if (currentBetValue < 25) {
        changeBetValue(25);
        return;
    } else if (currentBetValue < 50) {
        changeBetValue(50);
        return;
    } else if (currentBetValue < 100) {
        changeBetValue(100);
        return;
    } else if (currentBetValue < 250) {
        changeBetValue(250);
        return;
    } else if (currentBetValue < 500) {
        changeBetValue(500);
        return;
    } else if (currentBetValue < 1000) {
        changeBetValue(1000);
        return;
    } else if (currentBetValue < 2000) {
        changeBetValue(2000);
        return;
    } else if (currentBetValue < 5000) {
        changeBetValue(5000);
        return;
    } else {
        console.log('Error in betMore()');
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
    } else {
        console.log('Error in betLess()');
    }
}

function betMin() {
    changeBetValue(5);
}


function getBetType_other(bet) {
    LOG_triggered('getBetType_other()', bet);
    console.log('? ' + bet);
    switch (bet) {
        case 'first12': case 'second12': case 'third12':
            return 'THIRD';
        case 'red': case 'black':
            return 'COLOR';
        case 'low': case 'high':
            return 'HALF';
        case 'even': case 'odd':
            return 'EVEN-ODD';
    
        default:
            return 'ERROR: getBetType_other()';
    }
}

function getBetType_numbers(bet) {
    LOG_triggered('getBetType_numbers()', bet);
    const BET = bet.split('-')[0];
    return BET.toUpperCase();
}

function getBetName_other(bet) {
    LOG_triggered('getBetName_other()', bet);
    switch (bet) {
        case 'first12':
            return 'FIRST 12';
        case 'second12': 
            return 'SECOND 12';
        case 'third12':
            return 'THIRD 12';
        case 'red': 
            return 'RED';
        case 'black':
            return 'BLACK';
        case 'low': 
            return 'LOW'
        case 'high':
            return 'HIGH';
        case 'even': 
            return 'EVEN';
        case 'odd':
            return 'ODD';
    
        default:
            return 'ERROR: getBetName_other()';
    }
}

function getBetName_numbers(bet) {
    LOG_triggered('getBetType_numbers()', bet);
    let betArray = bet.split('-');

    //in case the bet name includes zero
    if (betArray.includes('zero')) {
        let zeroIndex = betArray.indexOf('zero');
        betArray[zeroIndex] = '0';
    }

    switch (betArray[0]) {
        case 'straight':
            return 'NUMBER ' + betArray[1];
        case 'split':
            return 'SPLIT ' + betArray[1] + '-' + betArray[2];
        case 'line':
            return 'LINE ' + betArray[1] + '-' + betArray[2] + '-' + betArray[3];
        case 'triple':
            return 'TRIPLE ' + betArray[1] + '-' + betArray[2] + '-' + betArray[3];
        case 'corner':
            return 'CORNER ' + betArray[1] + '-' + betArray[2] + '-' + betArray[3] + '-' + betArray[4];
        case 'street':
            return 'STREET ' + betArray[1] + '-' + betArray[2] + '-' + betArray[3] + '-' + betArray[4] + '-' + betArray[5];
    
        default:
            return 'ERROR: getBetName_numbers()';
    }
}

function clearList() {
    document.querySelector('#bet-list-body').innerHTML = '';
}

function isBetTypeNumber(bet) {
    if (bet.split('-').length > 1) {
        console.log(Array.isArray(bet.split('-')));
        console.log(Array.isArray(bet.split('-')));
        return true;
    } else {
        console.log(Array.isArray(bet.split('-'))); 
        return false;
    }
    
}

function updateList() {
    clearList();
    const LIST = document.querySelector('#bet-list-body');
    placedBets.forEach(element => {
        let row = LIST.insertRow(-1);
        let cell1 = row.insertCell(-1);
        let cell2 =  row.insertCell(-1);
        let cell3 =  row.insertCell(-1);

        if (isBetTypeNumber(element.betName)) {
            cell1.innerHTML = getBetName_numbers(element.betName);
            cell2.innerHTML = getBetType_numbers(element.betType);
        } else {
            cell1.innerHTML = getBetName_other(element.betName);
            cell2.innerHTML = getBetType_other(element.betName);
        }
        
        cell3.innerHTML = convertToCurrency(element.betValue);
    });
    document.querySelector('#bets-value').innerHTML = convertToCurrency(sum);
    document.querySelector('#loan-value').innerHTML = convertToCurrency(loan.chargeValue);
    document.querySelector('#total-value').innerHTML = convertToCurrency(sum + loan.chargeValue);
}

function placeBet_other(bet) {
    LOG_triggered('placeBet_other()', bet);
    let betName = bet;
    let betType = getBetType_other(bet);

    //checks if border was pressed
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
    LOG_triggered('placeBet_numbers()', bet);
    let betName = bet;
    bet = format(bet);
    let betType;
    let expectedNumbers = [];

    for (let i = 0; i < bet.length; i++) {
        if (i === 0) {
            betType = bet[i];
        } else {
            if (bet[i] === 'zero') {
                bet[i] = '0';
            }
            expectedNumbers.push(numbers[bet[i]]);
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
    LOG_triggered('undoBet()', 'empty');
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
    LOG_triggered('undoAll()', 'empty');
    placedBets = [];
    betHistory = [];
    sum = 0;
    LOG_printArrays();
    console.log(sum);
    updateList();
}