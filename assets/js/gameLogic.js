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

function showSequence (){
    var i = 0;
    let sequence = setInterval(function(){
        displaySequence(i);
        i++;
        if (i >= gameData.gameSequence.length){
            clearInterval(sequence);
        }
    }, 1000);
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

function playerInput() {
 document.getElementById('1').onclick = function(){
        gameData.playerSequence.push(1); 
        red();
 };
 document.getElementById('2').onclick = function(){
        gameData.playerSequence.push(2); 
        yellow();
 };
 document.getElementById('3').onclick = function(){
        gameData.playerSequence.push(3); 
        green();
 };
 document.getElementById('4').onclick = function(){
        gameData.playerSequence.push(4); 
        blue();
 };
}
