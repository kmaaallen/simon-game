// All script for testing is in same document here but separated in actual project.
// Game Data Object ------------------------------------------------------------
var gameData = {
    powerStatus: false,
    startStatus: false,
    strictStatus: false,
    count: 0,
    gameSequence: [],
    playerSequence: [],
    clickability: false,
    redAudio: redAudio,
    yellowAudio: yellowAudio,
    greenAudio: greenAudio,
    blueAudio: blueAudio
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
    document.getElementById('power').click();
}

function startClick() { // for testing purposes only
    document.getElementById('start').click();
}

function strictClick() { // for testing purposes only
    document.getElementById('strict').click();
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

document.getElementById('power').onclick = function() {
    gameData.powerStatus = !gameData.powerStatus;
    if (gameData.powerStatus === false) {
        gameData.startStatus = false;
        gameData.clickability = false;
    }
};

document.getElementById('start').onclick = function() {
    if (gameData.powerStatus === true && gameData.startStatus === false) {
        gameData.startStatus = !gameData.startStatus;
        newGame();
    }
};

document.getElementById('strict').onclick = function() {
    gameData.strictStatus = !gameData.strictStatus;
    strictDisplay();
};

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
    document.getElementById('1').onclick = function() {};
    document.getElementById('2').onclick = function() {};
    document.getElementById('3').onclick = function() {};
    document.getElementById('4').onclick = function() {};
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
    document.getElementById('1').onclick = function() {
        gameData.playerSequence.push(1);
        colour(redAudio, 1, 'red-light');
        if (gameData.playerSequence.length < gameData.gameSequence.length) {
            playerInput();
        }
        else {
            checkSequence();
        }
    };
    document.getElementById('2').onclick = function() {
        gameData.playerSequence.push(2);
        colour(yellowAudio, 2, 'yellow-light');
        if (gameData.playerSequence.length < gameData.gameSequence.length) {
            playerInput();
        }
        else {
            checkSequence();
        }
    };
    document.getElementById('3').onclick = function() {
        gameData.playerSequence.push(3);
        colour(greenAudio, 3, 'green-light');
        if (gameData.playerSequence.length < gameData.gameSequence.length) {
            playerInput();
        }
        else {
            checkSequence();
        }
    };
    document.getElementById('4').onclick = function() {
        gameData.playerSequence.push(4);
        colour(blueAudio, 4, 'blue-light');
        if (gameData.playerSequence.length < gameData.gameSequence.length) {
            playerInput();
        }
        else {
            checkSequence();
        }
    };
    let repeatSequence = setInterval(function() {
        showSequence();
        if (gameData.playerSequence.length > 0) {
            clearInterval(showSequence);
        }
    }, 7000);
}

function checkSequence() {
    if (gameData.playerSequence.join("") === gameData.gameSequence.join("") && gameData.gameSequence.length < 20) {
        gameData.playerSequence = [];
        setTimeout(newRound, 1000);
    }
    else if (gameData.playerSequence.join("") === gameData.gameSequence.join("") && gameData.gameSequence.length === 20) {
        displayWin();
        setTimeout(newGame, 1000);
    }
    else {
        if (gameData.strictStatus === true) {
            displayStartAgain();
            setTimeout(newGame, 1000);
        }
        else
            displayTryAgain();
        setTimeout(showSequence, 1000);
    }
}

/*let repeatSequence = setInterval(function() {
         checkSequence();
         if (gameData.playerSequence.length != 0) {
             clearInterval(repeatSequence);
         }
     }, 7000);
    setTimeout(checkSequence, 7000);
     if (gameData.playerSequence.length === 0) {
        setTimeout(showSequence, 1000);
    }
*/

// User Interface functions etc. -----------------------------------------------
document.getElementById('power').addEventListener('click', function() {
    if (gameData.powerStatus === true) {
        document.getElementById('display').innerHTML = "ready";
        document.getElementById('power-button').innerHTML = "Power ON";
        $(document.getElementById('power-button')).removeClass('off');
        $(document.getElementById('power-button')).addClass('on');
    }
    else {
        document.getElementById('display').innerHTML = '';
        document.getElementById('power-button').innerHTML = "Power OFF";
        $(document.getElementById('power-button')).removeClass('on');
        $(document.getElementById('power-button')).addClass('off');
    }
});

function displayCount() {
    document.getElementById('display').innerHTML = gameData.count;
}

function displayWin() {
    document.getElementById('display').innerHTML = 'Win!';
}

function displayTryAgain() {
    document.getElementById('display').innerHTML = 'Try again!';
}

function strictDisplay() {
    if (gameData.strictStatus === true) {
        document.getElementById('strict-button').innerHTML = "Strict Mode ON";
        $(document.getElementById('strict-button')).removeClass('off');
        $(document.getElementById('strict-button')).addClass('on');
    }
    else {
        document.getElementById('strict-button').innerHTML = "Strict Mode OFF";
        $(document.getElementById('strict-button')).removeClass('on');
        $(document.getElementById('strict-button')).addClass('off');
    }
}

function displayStartAgain() {
    document.getElementById('display').innerHTML = 'Start Again!';
}

function colour(colourAudio, id, className) {
    $(document.getElementById(id)).addClass(className);
    colourAudio.play();
    setTimeout(function() {
        $(document.getElementById(id)).removeClass(className);
    }, 500);
}

/*
function red() {
    $(document.getElementById('1')).addClass('red-light');
    //gameData.redAudio.play();
    setTimeout(function() {
        $(document.getElementById('1')).removeClass('red-light');
    }, 500);
}

function yellow() {
    $(document.getElementById('2')).addClass('yellow-light');
    // playSoundYellow();
    setTimeout(function() {
        $(document.getElementById('2')).removeClass('yellow-light');
    }, 500);
}

function green() {
    $(document.getElementById('3')).addClass('green-light');
    //playSoundGreen();
    setTimeout(function() {
        $(document.getElementById('3')).removeClass('green-light');
    }, 500);
}

function blue() {
    $(document.getElementById('4')).addClass('blue-light');
    //playSoundBlue();
    setTimeout(function() {
        $(document.getElementById('4')).removeClass('blue-light');
    }, 500);
}
*/

/*function playSoundRed(){
    gameData.redAudio.play();
}
function playSoundYellow(){
    gameData.yellowAudio.play();
}
function playSoundGreen(){
    gameData.greenAudio.play();
}
function playSoundBlue(){
    gameData.blueAudio.play();
}*/
