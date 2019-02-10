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

function displayMessage(message) {
    document.getElementById('display').innerHTML = (message);
}

document.getElementById('power').addEventListener('click', function() {
    if (gameData.powerStatus === true) {
        displayMessage(display.ready);
        document.getElementById('power-button').innerHTML = "Power ON";
        $(document.getElementById('power-button')).removeClass('off');
        $(document.getElementById('power-button')).addClass('on');
    }
    else {
        displayMessage(display.blank);
        document.getElementById('power-button').innerHTML = "Power OFF";
        $(document.getElementById('power-button')).removeClass('on');
        $(document.getElementById('power-button')).addClass('off');
    }
});

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
