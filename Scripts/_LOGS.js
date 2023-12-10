
export { LOG_triggered, LOG_printArrays }
import { placedBets, betHistory } from "./bet.js";

function LOG_printArrays() {
    console.log('PLACED BETS:');
    console.log(placedBets);
    console.log('BET HISTORY:');
    console.log(betHistory);
}

function LOG_triggered(name, args) {
    console.log(name + ' triggered with: ' + args);
}