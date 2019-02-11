// All script for testing is in same document here but separated in actual project.
// Game Data Object ------------------------------------------------------------
var gameData = {
    powerStatus: false,
    startStatus: false,
    strictStatus: false,
    count: 0,
    gameSequence: [],
    playerSequence: [],
};

var redAudio = new Audio('/assets/sounds/simonSound1.mp3');
var yellowAudio = new Audio('/assets/sounds/simonSound1.mp3');
var greenAudio = new Audio('/assets/sounds/simonSound1.mp3');
var blueAudio = new Audio('/assets/sounds/simonSound1.mp3');
// Game Logic ------------------------------------------------------------------
//function pageReload(){
//   location.reload();
//}

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

function newGame() {
    gameData.count = 0;
    gameData.gameSequence = [];
    gameData.playerSequence = [];
    setTimeout(newRound, 11); // set timeout only for testing purposes to check game variables reset
}

function newRound() {
    gameData.clickability = true;
    generateSequence();
    showSequence();
}

function generateSequence() {
    gameData.gameSequence.push(Math.floor(Math.random() * 4 + 1));
    gameData.count++;
    displayCount();
}

function showSequence() {
    segment.clickoff();
    var i = 0;
    let sequence = setInterval(function() {
        displaySequence(i);
        i++;
        if (i >= gameData.gameSequence.length) {
            clearInterval(sequence);
            playerInput();
        }
    }, 1000);
}

function displaySequence(i) {
    if (gameData.gameSequence[i] === 1) {
        colour(redAudio, 1, 'red-light');
    }
    else if (gameData.gameSequence[i] === 2) {
        colour(yellowAudio, 2, 'yellow-light');
    }
    else if (gameData.gameSequence[i] === 3) {
        colour(greenAudio, 3, 'green-light');
    }
    else {
        colour(blueAudio, 4, 'blue-light');
    }
    gameData.playerSequence = [];
}

function playerInput() {
    function playerclick(colourAudio, id, className) {
        gameData.playerSequence.push(id);
        colour(colourAudio, id, className);
        if (gameData.playerSequence.length < gameData.gameSequence.length) {
            playerInput();
        }
        else {
            checkSequence();
        }
    }
    (segment.red).onclick = function() { playerclick(redAudio, 1, 'red-light') };
    (segment.yellow).onclick = function() { playerclick(yellowAudio, 2, 'yellow-light') };
    (segment.green).onclick = function() { playerclick(greenAudio, 3, 'green-light') };
    (segment.blue).onclick = function() { playerclick(blueAudio, 4, 'blue-light') };
}

function checkSequence() {
    if (gameData.playerSequence.join("") === gameData.gameSequence.join("") && gameData.gameSequence.length < 20) {
        gameData.playerSequence = [];
        setTimeout(newRound, 1000);
    }
    else if (gameData.playerSequence.join("") === gameData.gameSequence.join("") && gameData.gameSequence.length === 20) {
        displayMessage(display.win);
        setTimeout(newGame, 1000);
    }
    else {
        if (gameData.strictStatus === true) {
            displayMessage(display.startAgain);
            setTimeout(newGame, 3000);
        }
        else {
            console.log('wrongInput');
            displayMessage(display.tryAgain);
            setTimeout(showSequence, 1000);
        }
    }
}


// User Interface functions etc. -----------------------------------------------

var display = {
    ready: 'Ready',
    blank: '',
    win: 'Win!',
    tryAgain: 'Try Again!',
    startAgain: 'Start Again!',
}

var segment = {
    red: document.getElementById('1'),
    yellow: document.getElementById('2'),
    green: document.getElementById('3'),
    blue: document.getElementById('4'),
    clickoff: function(colour) {
        (this.red).onclick = function() {};
        (this.yellow).onclick = function() {};
        (this.green).onclick = function() {};
        (this.blue).onclick = function() {};
    }
}

function displayMessage(message) {
    document.getElementById('display').innerHTML = (message);
}

document.getElementById('start').onclick = function() {
    if (gameData.powerStatus === true && gameData.startStatus === false) {
        gameData.startStatus = !gameData.startStatus;
        newGame();
    }
};

function displayCount() {
    document.getElementById('display').innerHTML = gameData.count;
}

function colour(colourAudio, id, className) {
    $(document.getElementById(id)).addClass(className);
    colourAudio.play();
    setTimeout(function() {
        $(document.getElementById(id)).removeClass(className);
    }, 500);
}

document.getElementById('strict-toggle').onclick = function() {
    gameData.strictStatus = !gameData.strictStatus;
    if (gameData.strictStatus === true) {
        $(this).removeClass('positionBefore').addClass('positionAfter');
        $(document.getElementById('strict-btn')).removeClass('btn-before').addClass('btn-after');
    }
    else {
        $(this).removeClass('positionAfter').addClass('positionBefore');
        $(document.getElementById('strict-btn')).removeClass('btn-after').addClass('btn-before');
    }
};

document.getElementById('power-toggle').onclick = function() {
    gameData.powerStatus = !gameData.powerStatus;
    if (gameData.powerStatus === true) {
        displayMessage(display.ready);
        $(this).removeClass('positionBefore').addClass('positionAfter');
        $(document.getElementById('power-btn')).removeClass('btn-before').addClass('btn-after');
    }
    else {
        gameData.startStatus = false;
        segment.clickoff();
        displayMessage(display.blank);
         $(this).removeClass('positionAfter').addClass('positionBefore');
        $(document.getElementById('power-btn')).removeClass('btn-after').addClass('btn-before');
    }
};
