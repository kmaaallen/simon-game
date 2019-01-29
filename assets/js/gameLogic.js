jQuery(document).ready(function() {
    $.getScript('/assets/js/gameData.js');
});

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
    showSequence();
    playerInput();
}

function generateSequence() {
    gameData.gameSequence.push(Math.floor(Math.random() * 4 + 1));
    gameData.count++;
    displayCount();
}

function showSequence() {
    console.log('showSequence');
    var i = 0;
    let sequence = setInterval(function() {
        displaySequence(i);
        i++;
        if (i >= gameData.gameSequence.length) {
            clearInterval(sequence);
        }
    }, 1000);
}

function displaySequence(i) {
    if (gameData.gameSequence[i] === 1) {
        console.log('red');
        red();
    }
    else if (gameData.gameSequence[i] === 2) {
        console.log('yellow');
        yellow();
    }
    else if (gameData.gameSequence[i] === 3) {
        console.log('green');
        green();
    }
    else {
        console.log('blue');
        blue();
    }
}

function playerInput() {
    document.getElementById('1').onclick = function() {
        gameData.playerSequence.push(1);
        red();
        if (gameData.playerSequence.length < gameData.gameSequence.length) {
            playerInput();
        }
        else {
            checkSequence();
        }
    };
    document.getElementById('2').onclick = function() {
        gameData.playerSequence.push(2);
        yellow();
        if (gameData.playerSequence.length < gameData.gameSequence.length) {
            playerInput();
        }
        else {
            checkSequence();
        }
    };
    document.getElementById('3').onclick = function() {
        gameData.playerSequence.push(3);
        green();
        if (gameData.playerSequence.length < gameData.gameSequence.length) {
            playerInput();
        }
        else {
            checkSequence();
        }
    };
    document.getElementById('4').onclick = function() {
        gameData.playerSequence.push(4);
        blue();
        if (gameData.playerSequence.length < gameData.gameSequence.length) {
            playerInput();
        }
        else {
            checkSequence();
        }
    };
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
        displayTryAgain();
        // setTimeout(showSequence, 1000);
    }
}
