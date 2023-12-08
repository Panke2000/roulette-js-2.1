
function getRandomNumber() {
    return Math.floor(Math.random() * 37);
}

function spin() {
    const OUTPUT_TEXT = document.querySelector('#spinning-display p');
    const OUTPUT_NUMBER = getRandomNumber();
    OUTPUT_TEXT.innerHTML = OUTPUT_NUMBER;
    return OUTPUT_NUMBER;
}

function checkWin(params) {
    
}