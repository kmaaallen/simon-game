jQuery(document).ready(function(){
    $.getScript('/assets/js/gameLogic.js');
});

document.getElementById('power').addEventListener('click', function(){
    if (gameData.powerStatus === true){
        document.getElementById('display').innerHTML = "ready";
    } else {
        document.getElementById('display').innerHTML = '';
    }
})