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
    document.getElementById('1').onclick = function() {};
    document.getElementById('2').onclick = function() {};
    document.getElementById('3').onclick = function() {};
    document.getElementById('4').onclick = function() {};
    var i = 0;
    let sequence = setInterval(function() {
        gameData.clickable = false;
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
       // red();
    }
    else if (gameData.gameSequence[i] === 2) {
        colour(yellowAudio, 2, 'yellow-light');
        //yellow();
    }
    else if (gameData.gameSequence[i] === 3) {
        colour(greenAudio, 3, 'green-light');
        //green();
    }
    else {
       colour(blueAudio, 4, 'blue-light');
        //blue();
    }
    gameData.playerSequence = [];
}

function playerInput() {
    document.getElementById('1').onclick = function() {
        gameData.playerSequence.push(1);
        colour(redAudio, 1, 'red-light');
        //red();
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
        //yellow();
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
        //green();
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
        //blue();
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
        if (gameData.strictStatus === true) {
            displayStartAgain();
            setTimeout(newGame, 3000);
        }
        else {
            console.log('wrongInput');
            displayTryAgain();
            setTimeout(showSequence, 1000);
        }
    }
}
