jQuery(document).ready(function(){
    $.getScript('/assets/js/gameLogic.js');
});

document.getElementById('power').addEventListener('click', function() {
    if (gameData.powerStatus === true) {
        document.getElementById('display').innerHTML = "Ready";
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

function strictDisplay(){
    if (gameData.strictStatus === true){
        document.getElementById('strict').innerHTML = "Strict Mode ON";
    } else {
        document.getElementById('strict').innerHTML = "Strict Mode OFF";
    }
}

function displayStartAgain(){
    document.getElementById('display').innerHTML = 'Wrong! Start again!';
}

function red() {
    $(document.getElementById('1')).addClass('red-light');
    gameData.redAudio.play();
    setTimeout(function() {
        $(document.getElementById('1')).removeClass('red-light');
    }, 500);
}

function yellow() {
    $(document.getElementById('2')).addClass('yellow-light');
    gameData.yellowAudio.play();
    setTimeout(function() {
        $(document.getElementById('2')).removeClass('yellow-light');
    }, 500);
}

function green() {
    $(document.getElementById('3')).addClass('green-light');
    gameData.greenAudio.play();
    setTimeout(function() {
        $(document.getElementById('3')).removeClass('green-light');
    }, 500);
}

function blue() {
    $(document.getElementById('4')).addClass('blue-light');
    gameData.blueAudio.play();
    setTimeout(function() {
        $(document.getElementById('4')).removeClass('blue-light');
    }, 500);
}
