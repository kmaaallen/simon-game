jQuery(document).ready(function() {
    $.getScript('assets/js/gameData.js');
});

document.getElementById('power').onclick = function() {
    gameData.powerStatus = !gameData.powerStatus;
    if (gameData.powerStatus === false) {
        gameData.startStatus = false;
        document.getElementById('1').onclick = function() {};
        document.getElementById('2').onclick = function() {};
        document.getElementById('3').onclick = function() {};
        document.getElementById('4').onclick = function() {};
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
    console.log('calling new game?');
    gameData.count = 0;
    gameData.gameSequence = [];
    gameData.playerSequence = [];
    newRound();
}

function newRound() {
    generateSequence();
    showSequence();
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
    console.log('got to display sequence');
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
    gameData.playerSequence = [];
    playerInput();
}

function playerInput() {
    console.log('got to player input');
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
    console.log('checkSequencecalled')
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
            setTimeout(newGame, 3000);
        }
        else {
            displayTryAgain();
            console.log('got here');
            setTimeout(showSequence, 1000);
        }
    }
}
