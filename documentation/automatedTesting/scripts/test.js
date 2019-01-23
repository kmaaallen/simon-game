// All script for testing is in same document here but separated in actual project.
// Game Data Object ------------------------------------------------------------
var gameData = {
    powerStatus: false,
    startStatus: false,
    count: 0,
    gameSequence: []
};

// Game Logic ------------------------------------------------------------------
//function pageReload(){
//   location.reload();
//}

function powerClick() { // for testing purposes only
    document.getElementById('power').click();
}

function startClick() { // for testing purposes only
    document.getElementById('start').click();
}

document.getElementById('power').onclick = function() {
    gameData.powerStatus = !gameData.powerStatus;
    if (gameData.powerStatus === false) {
        gameData.startStatus = false;
    }
};

document.getElementById('start').onclick = function() {
    gameData.startStatus = !gameData.startStatus;
    if (gameData.startStatus === true) {
        newGame();
    }
};

function newGame() {
    newRound();
}

function newRound() {
    generateSequence();
    displaySequence();
    playerInput();
}

function generateSequence() {
    gameData.gameSequence.push(Math.floor(Math.random() * 4 + 1));
    gameData.count++;
    displayCount();
}

function displaySequence() {}

function playerInput() {}


// User Interface functions etc. -----------------------------------------------
document.getElementById('power').addEventListener('click', function() {
    if (gameData.powerStatus === true) {
        document.getElementById('display').innerHTML = "ready";
    }
    else {
        document.getElementById('display').innerHTML = '';
    }
});

function displayCount() {
        document.getElementById('display').innerHTML = gameData.count;
}

