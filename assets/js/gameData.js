// Game Data Object

var gameData = {
    count: 0,
    gameSequence: [],
    playerSequence: [],
    powerStatus: false,
    startStatus: false,
    strictStatus: false,
};

// sounds
var redAudio = new Audio('https://simon-game-3-kmaaallen.c9users.io/assets/sounds/simonSound1.mp3');
var yellowAudio = new Audio('https://simon-game-3-kmaaallen.c9users.io/assets/sounds/simonSound2.mp3');
var greenAudio = new Audio('https://simon-game-3-kmaaallen.c9users.io/assets/sounds/simonSound3.mp3');
var blueAudio = new Audio('https://simon-game-3-kmaaallen.c9users.io/assets/sounds/simonSound4.mp3');

//audio context to prevent sound delay on Safari snipper below taken from: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext;
var oscillatorNode = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var finish = audioCtx.destination;

