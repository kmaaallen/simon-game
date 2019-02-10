// Game Data Object

var gameData = {
    count : 0,
    gameSequence : [],
    playerSequence : [],
    powerStatus : false,
    startStatus : false,
    strictStatus: false,
};

var segment = {
    red: document.getElementById('1'),
    yellow: document.getElementById('2'),
    green: document.getElementById('3'),
    blue: document.getElementById('4')
}

var redAudio = new Audio('assets/sounds/simonSound1.mp3');
var yellowAudio = new Audio('assets/sounds/simonSound2.mp3');
var greenAudio = new Audio('assets/sounds/simonSound3.mp3');
var blueAudio = new Audio('assets/sounds/simonSound4.mp3');
