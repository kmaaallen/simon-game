# Simon Game - Interactive Front End Milestone Project

This is an interactive game called Simon. 
On starting, the game plays a random sequence which the player has to copy.
The sequence is displayed as a flashing coloured button (red, yellow, green or blue) accompanied by a sound unique to that particular colour.
After the sequence is displayed, the player copies it by pressing on the appropriate coloured button (this will produce the same flash of colour and sound).

There are two modes:<br>
1) Strict Mode ON:<br>
In this mode, if the player gets the sequence wrong the game re-starts.
2) Strict Mode OFF:<br>
In this mode if the player gets the sequence wrong the game re-displays the same sequence until the player gets it right.

If the player gets the sequence right, the game generates a new round and displays the same sequence but with one extra element at the end.
That is, the sequence gets longer by one on every round.

If the player gets 20 rounds correct, they win the game.

This game was created as part of Code Institute's Software Diploma. 
It can be viewed at : https://kmaaallen.github.io/simon-game/
 
## UX

This game is for anyone to play and consists of a simple instruction paragraph and a game board.

The following user stories were used to help generate the logic for the game:
1) The player should be able to turn the game on and see the power is ON
2) The player should be able to switch between strict mode ON and strict mode OFF and see this change
3) The player should be able to start the game
4) The player should be able to see what round they are on at any given time
5) The player be able to see and hear the sequence displayed by the game clearly
6) The player should be able to click on the game board to copy the sequence
7) If the sequence is wrong, the player should see a message either telling them to try again or start again depending on strict mode
8) If the sequence is right, the player should see and hear the next sequence
9) If the player gets 20 rounds right they should see a message indicating they win

A full explanation of the logic behind this project can be found at: https://github.com/kmaaallen/simon-game/blob/master/documentation/logic.md

During this project I also created some wireframes of how I wanted the project to look, this was inspired by the original simon game style.
These can be viewed at : https://github.com/kmaaallen/simon-game/tree/master/documentation/wireframe
 

## Features
### Existing Features
#### Feature 1 - Instruction button opening to instruction paragraph on click
This button labelled "Instructions" when clicked reveals the instruction paragraph.
It is situated at the top of the webpage to ensure prominence and styled like the game buttons so it is intuitive to click it.
The instructions are initially hidden behind a button to avoid cluttering up the screen and to allow the player to see the whole simon game board in desktop without having to scroll down.
It is important the player reads this information properly so the text has good contrast to the background.

#### Feature 2 - game board
The game board contains the coloured segments, the control panel and the buttons/toggles for using the game.
For the coloured segments I stuck to the original simon game configuration (though the color order is different) and kept the colours bright.
When a colour is triggered by the sequence (see logic document) the segment lightens for a time to replicate a flash and plays a sound.

#### Feature 3 - control panel
The control panel contains the buttons (on larger screens) to use the game and the display.
The control panel overlays the coloured segments and is centered.
This sticks to the original design of the game but also ensures the player can see everything they need in the same place, they don't have to keep looking down or to the side to see the display.

#### Feature 4 - the buttons/toggles
There are two toggles and one button in this game.
The start button is a simple click button - this is only used to trigger the game start and so does not need a toggle.
The strict mode and power toggle switches are to the left with a red background when off and to the right with a green background when active.
This is so the player knows whether the power is on and whether the game is in strict mode or not.
These toggles move off the game board on smaller screen sizes so text and display are still readable for the player.

### Features Left to Implement
#### No player input catch
If the game displays and the player does not click any of the buttons to copy the sequence, I would like the game sequence to display again.

## Technologies Used
### HTML, CSS and JavaScript
Used as base languages to write and style webpages. <br>
HTML: https://www.w3.org/TR/html/ <br>
CSS: https://www.w3.org/Style/CSS/Overview.en.html <br>
JavaScript: https://www.w3schools.com/js/default.asp<br>

### Cloud9
This project was written on Cloud9. <br>
https://c9.io/login

### JavaScript
This project uses JavaScript for the game logic and some styling.<br>
JavaScript: https://www.w3schools.com/js/default.asp

### JQuery
This project uses JQuery to assist in execution of javaScript features. <br>
https://jquery.com/

### Jasmine
Used for automated testing.<br>
Jasmine: https://jasmine.github.io/

### Google Fonts
Main theme font "Roboto" was imported from Google fonts. <br>
https://fonts.google.com/

### Git
Local git repository was pushed to remote repository on GitHub and site was published using GitHub pages. <br>
https://git-scm.com/ <br>
https://github.com/

### W3C HTML and CSS online validators and JSHint for JavaScript
Online validators were used to check code was valid for HTML and CSS and to help catch errors in Javascript.<br> 
HTML validator: https://validator.w3.org <br>
CSS Validator: http://jigsaw.w3.org/css-validator/<br>
JavaScript correction tool: https://jshint.com/

### Autoprefix tool
This online autoprefix tool was used to check when vendor pre-fixes were necessary.<br>
Available at : https://autoprefixer.github.io/

### Favicon generator tool
This online tool was used to generate a favicon for my site.<br>
The favicon image can be viewed at: https://github.com/kmaaallen/simon-game/tree/master/assets/favicon<br>
The online generator tool is available at: https://www.favicongenerator.com/

## Testing
### Automated Testing
<br>This project used Jasmine to unit test the game. <br>
<br>Specs and the index page used to run the Jasmine unit tests can be found here: https://github.com/kmaaallen/simon-game/tree/master/documentation/automatedTesting <br>

For a full outline of my automated testing process please view: https://github.com/kmaaallen/simon-game/blob/master/documentation/automatedTesting/automatedTesting.md <br>

To run the tests:<br>
As I did: run the file /documentation/automatedTesting/index.html in preview in cloud9 or preview in browser.<br>
Or follow these instructions from the Jasmine documentation on how to install and run Jasmine available at: https://github.com/jasmine/jasmine#installation

### Testing Console Errors
#### During Automated testing
##### "Uncaught (in promise) DOMException"
When running the jasmine specs in my browser, the specs passed however the following error appeared in the console:
"Uncaught (in promise) DOMException" (This particular message was displayed in chrome but a similar message was displayed in Safari).
After some research I established this error was to do with Chrome and Safari's autoplay policies.<br>
Chrome's autoplay policy can be viewed here: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes<br>
Safari has also disabled autoplay until a user interacts with the page.

In Chrome - when the browser window first loads this error appears in console. However when you interact with the browser window
,for example, I used the options button in Jasmine to uncheck 'run in random order' to get the tests to run again, this error no longer appears
because you have interacted with the web browser and autoplay is allowed.

In Safari - turning on autoplay (through Safari > preferences > autoplay > always allow autoplay) for the browser window in which you are running the specs
allows them to be run without any error in console.

These are the only solutions I could find to these particular errors at this time. Ideally I would like to find a way of mocking user interaction before running the 
Jasmine specs to avoid these work arounds but have not yet found a solution.

##### "Expected $.length = 0 to equal 1. Expected $[0] = undefined to equal 2."
Rarely when running my specs one will fail (in the playerInput suite or even more infrequently in the displaySequence suite) with this error message.
After some dicussions with the tutors at Code Institute and my own investigations it appears that somewhere 
in the code there is a change of state happening either too early or too late which sometimes causes a spec to fail.
The specs pass most of the time and pass every time when run sequentially (i.e the 'run tests in random order' option is unchecked in Jasmine options) therefore I am satisfied my tests are robust enough to achieve their purpose.

#### During Manual Testing
When using AudioContext to remove sound delay in Safari browser it has to be called outside of a function in order to work.
However in Chrome this results in a notice (not an error) that AudioContext needs to be resumed or called within a function.
Doing this prevents the AudioContext from running properly in Safari. 
On balance I decided functionality was more important than being completely notice free and called it outside a function.

### Manual Testing
A full explanation of the manual testing for this project can be found at:https://github.com/kmaaallen/simon-game/blob/master/documentation/manualTesting/manualTesting.md


## Deployment
This project was deployed on GitHub Pages and can be viewed at: https://kmaaallen.github.io/simon-game/

Steps for deployment:
1) A local git repository was initiated at the beginning of the project
2) A remote git repository was initiated on github and linked to local repository
3) As each function or significant code development was added to project, project was committed to local repository then pushed to remote repository on github
4) On github, under the settings tab for this remote repository, available at: https://github.com/kmaaallen/simon-game/settings , in the GitHub Pages section,
I published my site from the master branch.


## Credits
### Content
This game is inspired by the original electronic Simon game invented by Ralph Baer and Howard Morrison. <br>
The code snippets used to remove the gray highlight on tap in mobile devices was taken from :  https://css-tricks.com/snippets/css/remove-gray-highlight-when-tapping-links-in-mobile-safari/ 
and was written by Chris Coyier on css-tricks.com.  <br>
The AudioContext code snipper used to fix Safari delay issue in gameData.js was taken from: The code used to set AudioContext in my gameUI.js file was from: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
### Media
Sounds for the simon game were taken from : https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-simon-game/

### Acknowledgements
The game board is styled similar to the original simon game, an example of which can be found here:  <br> https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Simon_Electronic_Game.jpg/693px-Simon_Electronic_Game.jpg

With thanks to the tutors at Code Institute who helped with my many questions on Jasmine unit tests.


