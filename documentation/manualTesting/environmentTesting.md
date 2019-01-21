# Testing environment is set up correctly
## There are three JS files that are going to be used to write the code for the game - check they are linked together correctly.
The gameData file will hold the gameData object - this will need to be accessed by BOTH the logic and UI JS files.
The UI JS file will also need to access the logic JS file in order to change the user interface.
Use jQuery getScript method at top of gameLogic.js (get gameData script) and at top of gameUI.js (get gameLogic.js).
In gameLogic.js, use console.log(gameData.count), view console, console should show 0.
In gameUI.js, use console.log(gameData.count), view console, console should show 0.
** ERROR - jQuery not defined. (Haven't added jQuery CDN script to index.html yet).
** TEST PASSED - 0 showed in console for both tests.
