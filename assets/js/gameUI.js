jQuery(document).ready(function() {
    $.getScript('assets/js/gameLogic.js');
}); 


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
    clickoff: function(colour){
        (this.red).onclick = function(){};
        (this.yellow).onclick = function(){};
        (this.green).onclick = function(){};
        (this.blue).onclick = function(){};
    }
}

document.getElementById('power').onclick = function() {
    gameData.powerStatus = !gameData.powerStatus;
    if (gameData.powerStatus === true) {
        displayMessage(display.ready);
        document.getElementById('power-button').innerHTML = "Power ON";
        $(document.getElementById('power-button')).removeClass('off');
        $(document.getElementById('power-button')).addClass('on');
    }
    else {
        gameData.startStatus = false;
        segment.clickoff();
        displayMessage(display.blank);
        document.getElementById('power-button').innerHTML = "Power OFF";
        $(document.getElementById('power-button')).removeClass('on');
        $(document.getElementById('power-button')).addClass('off');
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

function displayMessage(message) {
    document.getElementById('display').innerHTML = (message);
}

function displayCount() {
    document.getElementById('display').innerHTML = gameData.count;
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

function colour (colourAudio, id, className){
    $(document.getElementById(id)).addClass(className);
    colourAudio.play();
    setTimeout(function(){
     $(document.getElementById(id)).removeClass(className);  
    }, 500);
}
