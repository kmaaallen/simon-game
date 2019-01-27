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
    }
};

document.getElementById('start').onclick = function() {
    gameData.startStatus = !gameData.startStatus;
    if (gameData.startStatus === true) {
        newGame();
    }
};

function newGame() {
    gameData.count = 0;
    gameData.gameSequence = [];
    gameData.playerSequence = [];
    setTimeout(newRound, 11); // set timeout only for testing purposes to check game variables reset
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
    displayCount();
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
    //for (var i = 0; i < gameData.gameSequence.length; i++) {
    if (gameData.gameSequence[i] === 1) {
        red();
    }
    else if (gameData.gameSequence[i] === 2) {
        yellow();
    }
    else if (gameData.gameSequence[i] === 3) {
        green();
    }
    else {
        blue();
    }
    // }
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
        newRound();
    }
    else if (gameData.playerSequence.join("") === gameData.gameSequence.join("") && gameData.gameSequence.length === 20) {
        displayWin();
        setTimeout(newGame, 1000); 
    }
    else {
        displayTryAgain();
        setTimeout(showSequence, 1000);
    }
}


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

function displayWin() {
    document.getElementById('display').innerHTML = 'Win!';
}

function displayTryAgain() {
    document.getElementById('display').innerHTML = 'Try again!';
}

function red() {
    $(document.getElementById('1')).addClass('red-light');
    setTimeout(function() {
        $(document.getElementById('1')).removeClass('red-light');
    }, 500);
}

function yellow() {
    $(document.getElementById('2')).addClass('yellow-light');
    setTimeout(function() {
        $(document.getElementById('2')).removeClass('yellow-light');
    }, 500);
}

function green() {
    $(document.getElementById('3')).addClass('green-light');
    setTimeout(function() {
        $(document.getElementById('3')).removeClass('green-light');
    }, 500);
}

function blue() {
    $(document.getElementById('4')).addClass('blue-light');
    setTimeout(function() {
        $(document.getElementById('4')).removeClass('blue-light');
    }, 500);
}
