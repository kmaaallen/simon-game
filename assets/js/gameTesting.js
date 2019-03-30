//Functions for testing purposes only
function powerClick() { // for testing purposes only
    document.getElementById('power-toggle').click();
}

function startClick() { // for testing purposes only
    document.getElementById('start').click();
}

function strictClick() { // for testing purposes only
    document.getElementById('strict-toggle').click();
}

function redClick() { // for testing purposes only
    document.getElementById('1').click();
}

function yellowClick() { // for testing purposes only
    document.getElementById('2').click();
}

function greenClick() { // for testing purposes only
    document.getElementById('3').click();
}

function blueClick() { // for testing purposes only
    document.getElementById('4').click();
}

function TestNewGame() {
    gameData.count = 0;
    gameData.gameSequence = [];
    gameData.playerSequence = [];
    setTimeout(newRound, 11); // set timeout only for testing purposes to check game variables reset
}


