# Logic used to build the game
I wrote the code for this game by going through the motions as a player to see what they would expect to see or to happen at each stage.<br>
Below is a step by step explanation of my process of building the game logic.<br>
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
#### User Interface




## The game starts
The game must only start if the power is ON and the start button is ON. 
(i.e powerStatus and startStatus are BOTH true having been clicked.)
### Need to test
#### Game Logic
1) When start status is true AND power status is true newGame() function is called.
2) When start status is false and power status is true newGame() function is NOT called.
3) When start status is false and power status is false newGame() function is NOT called.
NOTE: Due to earlier tests in start button suite it is impossible to have a start status of true while power status is
false so that is not included here.
All tested and passed. Code added to gameLogic.js (i.e conditional added to start code and empty newGame function added)
#### User Interface




## New game parameters are set for first round and newRound() function is called.
Some of the gameData values need to be set for the start of a new game
The player needs to see this change somehow to indicate game has started and what round they are on.
### Need to test
#### Game Logic
1) When newGame() function is called, gameData.count is incremented by one (i.e goes from 0 to 1)
2) When newGame() function is called, it calls newRound() function.
All tested and passed. COMMENT - IS THE NEW GAME FUNCTION REALLY NECESSARY?
#### User Interface