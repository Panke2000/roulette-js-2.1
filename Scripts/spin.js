
export { spin };

let wheel_spin_sound = new Audio('./Sources/Audio/wheel_spin.mp3');

function getRandomNumber() {
    return Math.floor(Math.random() * 37);
}

function spin() {
    
    const OUTPUT_TEXT = document.querySelector('#spinning-display p');
    const OUTPUT_NUMBER = getRandomNumber();
    
    wheel_spin_sound.play();
    setTimeout(() => {
        OUTPUT_TEXT.innerHTML = OUTPUT_NUMBER;
    }, 3000);
    
    console.log(OUTPUT_TEXT.innerHTML);
    console.log(OUTPUT_NUMBER);
}

function checkWin(params) {
    
}