# Bugs found during manual testing (i.e being the player and going through the game)
## Game squares are not responsive and divs are overlapping each other
## When clicking on the yellow square the left half of it won't let you click on it 27/01/19
Issue - Because all divs are defined as 200 x 200 in size, in smaller screen sizes controls div is overlying half of yellow square div so you can't click that half
Fix - 27/01/19 
1) Re-size control div to be narrower (100px) so it doesn't take up space beyond its button boundaries
2) Make game grid responsive
## The count on round one starts at 2 instead of 1 27/01/19
## The delay between player inputting sequence, getting it checked and new sequence displaying is too short 27/01/19
## If there is no player input need to re-display sequence (set interval?) 27/01/19
## Function displayTryAgain and displayWin not defined 27/01/19
Fix - 27/01/19 - forgot to move displayTryAgain and displayWin functions into gameUI.js file from test.js file. Now added.