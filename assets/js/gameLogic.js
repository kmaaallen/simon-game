jQuery(document).ready(function(){
    $.getScript('/assets/js/gameData.js');
});

document.getElementById('power').onclick = function(){
gameData.powerStatus = !gameData.powerStatus;
};
