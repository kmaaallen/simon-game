# Logic used to build the game
I wrote the code for this game by going through the motions as a player to see what they would expect to see or to happen at each stage.<br>
Below is a step by step explanation of my process of building the game logic.<br>
With a separate section for user interface elements underneath the game logic where applicable.<br>
I separated by gameData object (where the variables for the game are held) from my main game logic and from the user interface 
changes for clarity and so that it was easier to test and re-purpose code if necessary.

## The player turns the game ON (i.e presses the power button)
The power button has to change state when clicked.
The player has to see this change somehow.
### Need to test:
#### Game Logic
1) The power button is in OFF state (i.e false) when page is first opened.
NOTE: When running these tests I unchecked the 'run tests in random order' option in Jasmine.
This is because if the "Initial power status" spec is run after the "power status change to ON" then
the test doesn't pass (as it sees the initial value as 'true').
I did try to mitigate this by using the 'location.reload()' function however this caused my jasmine application
to continuously reload the page and crash.
2) The power button changes to ON state (i.e true) when in OFF state and button is clicked.
3) The power button changes to OFF state (i.e false) when in ON state and button is clicked.
All tested and passed. Code added to gameLogic.js file.
#### User Interface
1) The game display (div with id = 'display') should show 'ready' when power is ON (i.e powerStatus is true)
2) The game display should show '' (i.e. nothing) when power is OFF (powerstatus = false)


## The player clicks the start button
The start button has to change state when clicked.
### Need to test:
#### Game Logic
1) The start button is in OFF state (i.e false) when page is first opened.
2) The start button changes to ON state (i.e true) when in OFF state when the button is clicked.
3) The start button changes to OFF state (i.e false) when in ON state when the button is clicked.
4) The start button changes to OFF state (i.e false) regardless of starting state if the power button goes to OFF state.
NOTE: ran these tests in random order (to check when start button was changing to false regardless of starting state)<br>
All tested and passed. Code added to gameLogic.js file (i.e powerbutton code updated to add conditional and start code added).


## The game starts
The game must only start if the power is ON and the start button is ON. 
(i.e powerStatus and startStatus are BOTH true having been clicked.)
The player needs to see this change somehow to indicate game has started
and what round they are on.
### Need to test
#### Game Logic
1) When start status is true AND power status is true newGame() function is called.
2) When start status is false and power status is true newGame() function is NOT called.
3) When start status is false and power status is false newGame() function is NOT called.
NOTE: Due to earlier tests in start button suite it is impossible to have a start status of true while power status is
false so that is not included here.
All tested and passed. Code added to gameLogic.js (i.e conditional added to start code and empty newGame function added)


## New game parameters are set for first round and newRound() function is called.
Some of the gameData values need to be set for the start of a new game
### Need to test
#### Game Logic
1) When newGame() function is called, it calls newRound() function.
All tested and passed. COMMENT - IS THE NEW GAME FUNCTION REALLY NECESSARY?

## newRound() function calls three functions to enable the game to progress
These three functions are: generateSequence(), displaySequence() and playerInput().
### Need to test
#### Game Logic
1) When newRound() function is called generateSequence() function is called
2) When newRound() function is called displaySequence() function is called
3) When newRound() function is called playerInput() function is called
Tested and passed. code added to gameUI.js file.


## generateSequence() function generates a sequence for the game to used
This sequence should be a random sequence consisting of the numbers 1,2,3 or 4.<br>
This sequence should be pushed into an array defined in the gameData object, called 'gameSequence'.<br>
Its length should equal gameData.count at the time it is called.
### Need to test
#### Game Logic
1) When generateSequence() function is executed a sequence is generated and pushed into gameSequence array.
2) That array consists of 1,2,3 or 4 only (no other numbers/characters/strings)
3) That array's length is equal to gameData.count
NOTE: While testing the array's length was equal to gameData.count I came across an issue,
which was that the count had already been incremented in the startGame function. I realised
it was more logical to increment the count when a new number had been added to the gameSequence.
i.e. when generateSequence() function is called. So I removed this test from the New game initiated test suite.
I then added the incrementation code inside the generateSequence function instead.<br>
Tested and passed. code added to gameUI.js file.
#### User Interface
The display should show gameData.count throughout the game and change when the count changes.<br>
1) Display should show gameData.count when the count changes (i.e when generateSequence is called).
Tested and passed. Code added to gameUI.js .
NOTE: removed spec testing display showed '1' when new game called as now redundant - as display is being tested when count is incremented instead.

## The gameSequence is displayed to the player
Once the gameSequence has been generated it will be shown to the player as a series of 'flashing' coloured lights and sounds.<br>
The coloured squares will need to have a 'light' class to indicate a change in colour.<br>
This 'light' class will need to be added to and removed from the coloured squares over a short period of time to indicate 'flashing'.<br>
The accompanying sound (relative to each colour) will have to play for the same amount of time.<br>
#### Game logic
1) Game needs to link each number in the gameSequence to a specific coloured square<br>
i.e 1 = red, 2 = yellow, 3 = green, 4 = blue.
2) Game needs to call the function that 'lights up' that coloured square and 'sounds' that square's noise //SOUNDS TO BE ADDED STILL
All tested and passed, code added to gameUI.js and gameLogic.js files.

#### User Interface
1) Light class needs to be added to coloured square
2) Sound needs to be played for relevant coloured square // SOUND CLIPS NOT ADDED YET
3) Light class needs to be removed after interval of time
All tested and passed, code added to gameUI.js and gameLogic.js files.