jQuery(document).ready(function(){
    $.getScript('/assets/js/gameData.js');
});

document.getElementById('power').onclick = function(){
gameData.powerStatus = !gameData.powerStatus;
if (gameData.powerStatus === false){
    gameData.startStatus = false;
}
};

document.getElementById('start').onclick = function(){
  gameData.startStatus = !gameData.startStatus;
  if (gameData.startStatus === true){
      newGame();
  }
};

function newGame(){
    gameData.count++;
    newRound();
}

function newRound(){
    generateSequence();
    showSequence();
    playerInput();
}

function generateSequence() {
    gameData.gameSequence.push(Math.floor(Math.random() * 4 + 1));
    gameData.count++;
    displayCount();
}

function displaySequence(i) {
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
}

function playerInput(){}
