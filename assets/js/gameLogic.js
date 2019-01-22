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
    
}