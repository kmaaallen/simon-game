# Bugs found during manual testing (i.e being the player and going through the game)

## Game squares are not responsive and divs are overlapping each other
Issue - When clicking on the yellow square the left half of it won't let you click on it 27/01/19<br>
Because all divs are defined as 200 x 200 in size, in smaller screen sizes controls div is overlying half of yellow square div so you can't click that half
Fix - 27/01/19 
1) Re-size control div to be narrower (100px) so it doesn't take up space beyond its button boundaries
2) Make game grid responsive

## The count on round one starts at 2 instead of 1 27/01/19
Issue - count incremented in both newGame and generatesequence function so new game starts on 2
Fix - 28/01/19
1) Removed count++ from newGame function. Count now only incremented when generateSequence is called.

## The delay between player inputting sequence, getting it checked and new sequence displaying is too short 27/01/19
Issue - new sequence is displayed too quickly once player sequence checked.
Fix - 28/01/19
1) setTimeout added in checkSequence function before newRound is called. Tested and added to code.

## If there is no player input need to re-display sequence (set interval?) 27/01/19
Issue - if the player doesn't copy the sequence the game just stops at this point. <br>
After a time if no player input the sequence should replay to prompt the player to do something.

1) 

## Function displayTryAgain and displayWin not defined 27/01/19
Fix - 27/01/19 - forgot to move displayTryAgain and displayWin functions into gameUI.js file from test.js file. Now added.

## Interval before repeating sequence (7 seconds) only works on first round when gameSequence length is 1. 28/01/19

## When strict mode is on and wrong message displays - message is too long for display - 29/01/19
Fix - 29/01/19 - made display box longer.

## if you press start (without turning on power) - the game starts anyway... 29/01/19
Fix - 30/01/19 - adjusted start click function to check BOTH power and start were true. Added specs and tested.

## startStatus not changing back to false if on and power is clicked on 30/01/19
Fix - 30/01/19 - changed specs to test for start button ONLY turning ON when power is already on and only turning OFF
when power button is turned off. Tested and adjusted code.

## Turning power off doesn't seem to turn off game... 31/01/19
Fix - 4/02/19 - adjusted test code for power/start click interaction and updated specs for testing.
startStatus is now only true when start button is clicked when power is already on. i.e
clicking the start button while the power is off does nothing to change start status.
When poer button is switched of start status is changed to false if true and remains false if false.

## game still calling show sequence in strict mode even when player sequence is wrong 4/2/19
fix - 4/2/19 - missing braces {} - added - fixed.