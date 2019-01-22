var gameData = {
    powerStatus : false
};

//function pageReload(){
 //   location.reload();
//}

function powerClick(){ // for testing purposes only
    document.getElementById('power').click();
}

document.getElementById('power').onclick = function(){
gameData.powerStatus = !gameData.powerStatus;
};
