# Manual Testing 

## Environment Testing
### Checking testing environment is set up correctly
#### There are four files that will be used to run unit tests - check they are linked correctly
The index.html file within the automatedTesting directory will be used to run the Jasmine unit tests.<br>
Therefore it needs to contain the following in the header of this index.html file:
<pre><code>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.css" />
</code></pre>

It also needs to be linked to the test.js script file and the two spec files (testSpec.js and uiSpec.js) correctly in the body of index.html.<br>
<pre><code>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/test.js"></script>
    <script type="text/javascript" src="spec/testSpec.js"></script>
    <script type="text/javascript" src="spec/uiSpec.js"></script>
</code></pre>

The jquery script has also been added here as I will be using the jquery library with Javascript.
The order of the scripts is important : both spec files will be using the script in test.js, therefore the test.js file must be loaded first.

If my testing environment has been set up correctly, I should be able to run a simple test in both spec files based on code in the script file.
I tested my environment with my first piece of code written - the power button functionality:
First I added some basic HTML relating to the power and start buttons to my test index.html file :
<pre><code>
<div class="controls">
        <button name="Start" id= "start">Start</button>
        <button name="Power" id= "power">Power</button>
        <div id="display"></div>
    </div>
</code></pre>

Next I added a spec to my testSpec.js file (as this first test was not related to UI it went in the testSpec file)
<pre><code>
describe("Initial power status test suite", function() {
    it("should have an initial value of false", function() {
        expect(gameData.powerStatus).toEqual(false);
    });
});

describe ("power status change to ON test suit", function(){
    beforeEach (function(){
        gameData.powerStatus = false;
    })
    it("should have a value of true when power button clicked while value is false", function() {
        powerClick();
        expect(gameData.powerStatus).toEqual(true);
    });
})

describe ("power status change to OFF test suit", function(){
    beforeEach (function(){
        gameData.powerStatus = true;
    })
    it("should have a value of false when power button clicked while value is true", function() {
        powerClick();
        expect(gameData.powerStatus).toEqual(false);
    });
})
</code></pre>

Lastly I added a gameData object, a function to test the click of the power button and a function to change its power status to test.js (script):
<pre><code>
var gameData = {
    powerStatus : false
};

function powerClick(){ // for testing purposes only
    document.getElementById('power').click();
}

document.getElementById('power').onclick = function(){
gameData.powerStatus = !gameData.powerStatus;
};
</code></pre>

The specs passed and Jasmine ran as expected indicating the testing environment was set up correctly.


### For the live project there were three JS files that needed to be linked.
#### Checking game code files are linked together correctly.
The gameData file will hold the gameData object - this will need to be accessed by BOTH the logic and UI JS files.
The UI JS file will also need to access the logic JS file in order to change the user interface.
I used jQuery getScript method at top of gameLogic.js (get gameData script) and at top of gameUI.js (get gameLogic.js).
<br>
To test the files were linked correctly I did the following:
1) Set up gameData object in gameData.js file with a count of 0.
2) In gameLogic.js, use console.log(gameData.count), view console, console should show 0.
3) In gameUI.js, use console.log(gameData.count), view console, console should show 0, 0 (as gameUI.js is linked also to gameLogic.js which is also logging '0').
<br>
I had an initial error of jQuery not defined. Because I hadn't added jQuery CDN script to index.html yet, only to my test index.html.
I fixed this and console logged two zeros as expected, indicating my files were linked correctly.

## Manual Testing Method
I came up with several user stories before starting development of this game. They, and the manual testing used to test they were met are below.

### User Stories
1) The player should be able to turn the game on and see the power is ON
<br> TEST: when the power button is clicked, there is a visual change for the user.
<br> PASSED: The power toggle moves to the right and the background colour changes from red to green - green indicating on.

2) The player should be able to switch between strict mode ON and strict mode OFF and see this change
<br> TEST: when the strict button is clicked, there is a visual change for the user.
<br> PASSED: The strict toggle moves to the right and the background colour changes from red to green - green indicating on.

3) The player should be able to start the game
<br>TEST: There is a clear option for the player to start the game and choosing it does start the game (tested with power on/off and strict mode on/off).
<br> PASSED: The start button is clearly labelled, easy to find and clicking on it (as long as power is on) starts the game.

4) The player should be able to see what round they are on at any given time
<br>TEST: There should be a display that shows a numerical indicator of the round being played (checked on every round).
<br> PASSED: There is a display that shows the number of round being played, this changes as the round number increases.
<br> COMMENTS: The round number is sometimes obscured by messages for the player - this is intentional to give the player information. On each new round the round number is displayed again.

5) The player be able to see and hear the sequence displayed by the game clearly
<br>TEST: There should be a visual indication and a sound played at intervals to display a sequence (tested on several different rounds both with strict mode ON and OFF).
<br> PASSED: The coloured sequence is displayed in order, one after the other with no overlap. When a particular colour is displayed
it appears to flash and a sound is heard.

6) The player should be able to click on the game board to copy the sequence
<br>TEST: The coloured buttons should be clickable (tested at multiple points in the game and at every round).
<br> PASSED: The player can click on the coloured buttons.
<br> COMMENT: The player can only do so when their input is required otherwise it disrupts the game.

7) If the sequence is wrong, the player should see a message either telling them to try again or start again depending on strict mode
<br>TEST: A message should be displayed when the player gets a sequence wrong (tested on several different rounds both with strict mode ON and OFF)
<br> PASSED: When strict mode is ON and the player gets the sequence wrong the message 'Start Again!'is shown in display for a time before being replaced by count 1 (when the game restarts).
When strict mode is OFF and the player gets the sequence wrong, the message 'Try again!' is shown in display until the player gets the sequence right.

8) If the sequence is right (but not the final round), the player should see and hear the next sequence
<br>TEST: When the sequence is correct (tested on rounds 1 to 19 in strict mode ON and OFF), the next round sequence should be displayed.
<br> PASSED: When the sequence is correct, the next round is called - the round number in display increases by one and the next sequence is displayed automatically.

9) If the player gets 20 rounds right they should see a message indicating they win
<br>TEST: When the sequence is correct on the final round (tested in both strict mode ON and OFF), a message should be displayed indicating a win.
<br> PASSED: When the game is won the message "Win!" is shown in the display.

### Responsiveness
The game needs to be responsive and look well on screens as narrow as 360px and as wide as 3840px
<br> TEST: Screen re-sized within this width range and assessed visually
<br> PASSED: Screen looked well on all screen sizes tested

### Cross-browser compatibility
The game needs to look well and function on different browsers.
To test this I used my Google Chrome, Safari and Firefox browser on my own laptop - checking for responsiveness and function.

#### Problems Identified

##### On Safari mobile the first sound of a displayed sequence will play but not subsequent sounds.
I used stack overflow to search for a solution and through an answer here : https://stackoverflow.com/questions/31776548/why-cant-javascript-play-audio-files-on-iphone-safari provided by user "Ed Ballot" in August 2015
was directed to the iOS documentation and an article on IBM's developer site.
iOS documentation link: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html
IBM article link: https://www.ibm.com/developerworks/library/wa-ioshtml5/wa-ioshtml5-pdf.pdf

"the JavaScript play() and load() methods are also inactive until the user initiates playback, unless the play() or load() method is triggered by user action"
What appears to be the issue is that while the first sound has been initiated by the player pressing start (albeit a few steps through the code), the second sequence isn't initiated by the player.
Once the player clicks on that colour for player input, it has been initiated and safari will then play that sound.

To work around this I created a soundReady function that is called on the player pressing the power button. 
<pre><code>
function soundReady(audioArray, mute) {
    if (mute === 'off') {
        for (var i = 0; i < audioArray.length; i++) {
            audioArray[i].muted = true;
            audioArray[i].play();
        }
    }
    else {
        for (var j = 0; j < audioArray.length; j++) {
            audioArray[j].muted = false;
        }
    }
}
</code></pre>

Within this function if the mute argument is 'off' the sounds will play but be muted (the player won't hear anything).
I called soundReady with the 'off' argument in the power-toggle click function so set up the sounds for mobile safari to use later.
Then in the start button click function I called soundReady with an 'on' argument so mute is false for the sounds and they will play when displayed or a square is clicked by the user.
<br>
Towards the end of my project I realised that I did not need to create a whole function and indeed my soundReady function was not functioning well every time, there were still occasional delays in sound. 
After some further research and in subsequent tests adding an audio context worked better with less lines of code.
The only issue with this is that when AudioContext is used it needs to be called outside a function to work in Safari and within a function to avoid notices in Chrome due to Chrome's autoplay policy.
On balance I decided functionality was more important than being completely notice free and called it outside a function like so:

Using AudioContext:
<pre><code>
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext;
var oscillatorNode = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var finish = audioCtx.destination;
</code></pre>

I placed this code in my gameData.js file to keep all the sound components together.

The code used to set AudioContext in my gameUI.js file was from: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
Further information regarding Chrome's Autoplay policy was found here: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio

##### On Safari mobile - when player clicks on segment - box shadow appears
To remove this shadow effect on tap in mobile I used the following code:<br>
In CSS: -webkit-tap-highlight-color: rgba(0,0,0,0); for each coloured square class<br>
In JS: document.addEventListener("touchstart", function(){}, true);<br>
This solution was found through searching google and the code used is from: https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/
and was written by Chris Coyier on css-tricks.com.

##### Internet Explorer and firefox - Not allowing click on toggle buttons
I couldn't get the game to start in these two browsers initially as clicking the power button did nothing.
I used the debugging tool in firefox developer tools and realised the issue was with the initial line of the function, as none of the function further on was being implemented (tested using console.log statements):
<pre><code>document.getElementById('power-toggle').onclick() = function {...}</code></pre>
Next I checked there wasn't an issue with the id 'power-toggle' by double checking I hadn't accidentally used it twice in my code and
then by doing the following in the firefox console:
<pre><code>document.getElementById('power-toggle')</code></pre>
This returned the div with that id so I isolated the problem to the onclick function.
After some searching on stack overflow I found the following answer posted by 'Mamun' on May 4th 2018, "In Firefox, the button itself steals events like mouse events and click of child element".
Because the toggle switches are divs nested inside buttons in my index.html file they aren't clickable, thus the functions activating the toggle and implementing the game cannot be called.
To fix this I changed the buttons with ids of 'power-btn' and 'strict-btn' respectively to divs. Re-formatted the CSS for styling and the power and strict toggles now work as desired.

## Bugs Found during manual testing (i.e being the player and going through the game)
### Problem
I had an initial issue when clicking on the coloured squares that there were some overlapping with divs and that the game squares were not responsive.
This meant I couldn't always activate the coloured square because the overlapping div was getting in the way.
#### Resolution
Initially I fixed this issue by re-sizing the control div to be narrower (this was the overlapping culprit) and by making the game grid responsive using CSS grid.
This did solve the issue however I later re-designed the game board, removing my use of CSS grid, manually sizing each div and using media queries instead to re-size the game at different breakpoints.
By manually sizing each div I was able to ensure there was no overlap when the screen size increased or decreased and made managing the responsiveness of the site much easier.

### Problem
New sequence is displayed too quickly once player sequence checked.
#### Resolution
A setTimeout method was added in checkSequence function before newRound is called.

### Problem
If you press start (without turning on power) - the game starts anyway... 29/01/19
#### Resolution
I adjusted start click function to check BOTH power and start were true now game won't start unless power is on.

### Problem
The game was not turning off when the power button was turned off if start status was still on.
#### Resolution
Because of the way the game code ran, when start status was true then the game would run regardless of power status.
To resolve this I added to the code that monitored start status. I added in the condition that start status could only be true (i.e and the game could start)
if power was on. I also added into the power button functionality that when it was turned off, start status would also change to false, regardless of what status it was in.
Because of this fix, now, clicking the start button whilst power is off does nothing and turning the power off resets the game to its default mode.

### Problem (haywire display)
Player can click on buttons when the game sequence is being displayed - this disrupts game sequence display.
#### Resolution
This is related to the user feedback I recieved below and was picked up in manual testing of my own.
To resolve this issue I added empty functions on click for coloured buttons into the top of show sequence (see below).
I also moved the playerInput call into my showSequence function so it is only called when display sequence is finished.
Thus every time show sequence is called clicking on the coloured buttons does nothing until the sequence has finished being displayed.
<pre><code>
function showSequence() {
    document.getElementById('1').onclick = function() {}; // this code has since been refactored for readability and to avoid repetition.
    document.getElementById('2').onclick = function() {};
    document.getElementById('3').onclick = function() {};
    document.getElementById('4').onclick = function() {};
    var i = 0;
    let sequence = setInterval(function() {
        displaySequence(i);
        i++;
        if (i >= gameData.gameSequence.length) {
            clearInterval(sequence);
            playerInput(); // moved within the sequence variable
        }
    }, 1000);
    
    // playerInput call used to be here
}
</code></pre>

### Problem
If player turns off power while game is displaying or replaying a sequence the sequence continues to play after power is off.
#### Resolution
To resolve this issue I added an extra condition to the displaySequence function that meant it would stop as soon as powerStatus was no longer true.
I then tested this in the live game, turning the power off in the middle of the game displaying a sequence and it worked.
This is the code modified below: 
<pre><code>
function displaySequence(i) {
    if (gameData.powerStatus === true){ // new condition added
    if (gameData.gameSequence[i] === 1) {
        colour(redAudio, 1, 'red-light');
    }
    else if (gameData.gameSequence[i] === 2) {
        colour(yellowAudio, 2, 'yellow-light');
    }
    else if (gameData.gameSequence[i] === 3) {
        colour(greenAudio, 3, 'green-light');
    }
    else {
        colour(blueAudio, 4, 'blue-light');
    }
    gameData.playerSequence = [];
    } else {
        return; // this causes the function to be exited if the power is turned off
    }
}
</code></pre>

### Problem
In Safari, if power was turned off whilst game sequence was still displaying then turned back on again, the last sequence would continue until finished.
The sequence should no longer be displayed once power is off.
### Resolution
To resolve this I reset gameData.gameSequence to an empty array within the power button function:
<pre><code>
document.getElementById('power-toggle').onclick = function() {
    gameData.powerStatus = !gameData.powerStatus;
    if (gameData.powerStatus === true) {
        displayMessage(display.ready);
        $(this).removeClass('positionBefore').addClass('positionAfter');
        $(document.getElementById('power-btn')).removeClass('btn-before').addClass('btn-after');
        //soundReady([redAudio, yellowAudio, greenAudio, blueAudio], 'off');
    }
    else {
        gameData.startStatus = false;
        gameData.gameSequence=[]; // this line here was added
        segment.clickoff();
        displayMessage(display.blank);
        $(this).removeClass('positionAfter').addClass('positionBefore');
        $(document.getElementById('power-btn')).removeClass('btn-after').addClass('btn-before');
    }
};
</code></pre>

## User Feedback (from family and friends)
### Issue: When player gets sequence wrong - replay of sequence goes haywire - not playing in nice order 6/2/19
#### Resolution
I tested this issue myself after receiving feedback that this was happening. 
When the sequence was wrongly inputted by the player the replay of sequence was not showing smoothly.
This only seemed to be happening when a player got a colour wrong in the middle of the sequence.
When the player gets a colour wrong on the last one of the sequence there is no issue.
To see what was happening I added console.log(color) statements in the checkSequence function and used debugger in Chrome Dev Tools to go through the 
process step by step.
<br> I realised there were two issues:
1) The player could click on the buttons whilst the sequence was being displayed resulting in confusion
2) playerInput was being called before the sequence had finished displaying, this resulted in multiple playerInput calls once showSequence was called to replay the sequence.
This was leading to multiple instances of the sequence playing at the same time giving a haywire appearance.

The fix for this bug is outlined in the problem labelled 'haywire display' above.


## Bugs not fixed
### Problem 
If there is no player input the game stops at this point - should I get the sequence to replay after an interval?
### Result
I initially wanted the sequence to replay after a time of inactivity and did attempt to develop some code to this effect.
However I realised if the player had left the game and it continued to play sound and lights not only might it be irritating, but it might
run down the device battery.

I decided not to implement this fix at this time and come up with an alternative solution perhaps a 'repeat sequence' button could be implemented at a later date.
