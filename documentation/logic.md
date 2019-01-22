# Logic used to build the game
I wrote the code for this game by going through the motions as a player to see what they would expect to see or to happen at each stage.<br>
Below is a step by step explanation of my process of building the game logic.<br>
I separated by gameData object (where the variables for the game are held) from my main game logic and from the user interface changes for clarity and so that it was easier to test and re-purpose code if necessary.

## The player turns the game ON (i.e presses the power button)
The power button has to change state when clicked.
### Need to test: 
#### The power button is in OFF state (i.e false) when page is first opened.
Tested and passed.
#### The power button changes to ON state (i.e true) when in OFF state and button is clicked.
Tested and passed.
#### The power button changes to OFF state (i.e false) when in ON state and button is clicked.
Tested and passed. Code added to gameLogic.js file.