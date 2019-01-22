var gameData = {
    powerStatus : false,
    startStatus : false
};

//function pageReload(){
 //   location.reload();
//}

function powerClick(){ // for testing purposes only
    document.getElementById('power').click();
}

function startClick(){ // for testing purposes only
    document.getElementById('start').click();
}

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
 
}


