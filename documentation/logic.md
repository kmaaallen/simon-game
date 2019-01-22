# Logic used to build the game
I wrote the code for this game by going through the motions as a player to see what they would expect to see or to happen at each stage.<br>
Below is a step by step explanation of my process of building the game logic.<br>
I separated by gameData object (where the variables for the game are held) from my main game logic and from the user interface changes for clarity and so that it was easier to test and re-purpose code if necessary.

## The player turns the game ON (i.e presses the power button)
The power button has to change state when clicked.
### Need to test: 
#### The power button is in OFF state (i.e false) when page is first opened.
Tested and passed.
NOTE: When running these tests I unchecked the 'run tests in random order' option in Jasmine.
This is because if the "Initial power status" spec is run after the "power status change to ON" then
the test doesn't pass (as it sees the initial value as 'true').
I did try to mitigate this by using the 'location.reload()' function however this caused my jasmine application
to continuously reload the page and crash.
#### The power button changes to ON state (i.e true) when in OFF state and button is clicked.
Tested and passed.
#### The power button changes to OFF state (i.e false) when in ON state and button is clicked.
Tested and passed. Code added to gameLogic.js file.


## The player clicks the start button
The start button has to change state when clicked.
### Need to test:
#### The start button is in OFF state (i.e false) when page is first opened.
Tested and passed.
#### The start button changes to ON state (i.e true) when in OFF state and the button is clicked.
Tested and passed.
#### The start button changes to OFF state (i.e false) when in ON state and the button is clicked.
Tested and passed.
#### The start button changes to OFF state (i.e false) regardless of starting state if the power button goes to OFF state.
NOTE: ran these tests in random order (to check when start button was changing to false regardless of starting state)<br>
Tested and passed. Code added to gameLogic.js file (i.e powerbutton code updated to add conditional and start code added).

## The game starts
The game must only start if the power is ON and the start button has been clicked (i.e powerStatus and startStatus are BOTH true)
### Need to test: