# Automated Testing
## Purpose
The purpose of this document is to explain the processes I used when creating automated unit tests for my Simon Game - Interactive Front End Milestone Project.

## Technologies Used
I used Jasmine, a free, open-source testing framework, to run my automated tests.
<br> Full documentation on Jasmine can be found at: https://jasmine.github.io/

## Setting up the testing environment
### Creating the directories
To set up my testing environment I did the following steps:
1) Created a documentation directory - all documentation (including tests) relating to the project will go here
2) Created a automatedTesting directory within documentation - this contains specs, scripts and the html page used for automated testing
3) Created a scripts directory within the automatedTesting directory
4) Created a test.js file within the scripts directory - this is where I will write the code to be tested
NOTE: I later deleted this test.js file and linked my specs to my deployed js files to avoid duplication.
5) Created a specs directory within the automatedTesting directory
6) Created a testSpec.js file within the specs directory - this is where I will write unit tests related to game logic
7) Created a uiSpec.js file within the specs directory - this is where I will write unit tests related to user interface changes
8) Created an index.html file within the automatedTesting directory - this is where I will write the basic HTML required for testing.

Separating into directories allowed me to keep my code and tests organised and to separate my tests from the source code.

### Creating the boilerplate
#### Setting up Jasmine
To use the Jasmine framework we need to reference the Jasmine JavaScript, boot and css files required.<br>
These will be referenced within the head of my index.html testing boilerplate. Where the stylesheet will also be referenced. <br>
I decided to load Jasmine from a Content Delivery Network.
These references can be found on CDNJS : https://cdnjs.com/libraries/jasmine

Here is how these references were loaded within the head of my boilerplate html file:
<pre><code>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.css" />
</code></pre>

The order of the files is important:
1) The main Jasmine script needs to be available first
2) The Jasmine HTML script next
3) The boot script next - this is what will run any tests as soon as they are written and loaded into the browser.
4) The CSS link comes last

#### Linking in spec/script 
The specs and the script need to be loaded into the HTML boilerplate. <br>
The order of this loading is also important so the files were loaded at the bottom of the body of the text index.html as follows:
<pre><code>
     <script src="../../assets/libs/jquery.js"></script>
    <script src="../../assets/js/gameData.js"></script>
    <script src="../../assets/js/gameLogic.js"></script>
    <script src="../../assets/js/gameUI.js"></script>
    <script src="../../assets/js/gameTesting.js"></script>
    <script src="spec/testSpec.js"></script>
    <script src="spec/uiSpec.js"></script>
</code></pre>

The script uses jquery with JavaScript so that has to be loaded first. I initially used jQuery from a Content Delivery Network but found
this to be a little slow when running my specs. Therefore I downloaded the library (that can be found under the 'libs' directory) and linked through
to this using a relative path<br>
The scripts are what the tests will be acting on so it is loaded before the specs. <br>


## Writing the tests
As much as possible I tried to use the 'red-green-refactor' philosophy of testing, starting my writing failing tests,
adding in the code that will make them pass and then refactoring the code / tests.
For this project most of the refactoring and stream-lining took place towards the end once my game was fully functional.
<br>
Initially I didn't separate out the game data from the user interface and game logic code and ran the specs on a single test.js file.
However I later ran the specs on my deployed js files (in the js directory within the assets directory) to avoid code duplication.
I also added the gameTesting.js file which contained functions used only for testing and not for running the game in the browser.

The gameTesting.js file can be viewed at: https://github.com/kmaaallen/simon-game/blob/master/assets/js/gameTesting.js

The full list of specs for testing game logic can be viewed at: https://github.com/kmaaallen/simon-game/blob/master/documentation/automatedTesting/spec/testSpec.js

The full list of specs for testing user interface changes can be viewed at: https://github.com/kmaaallen/simon-game/blob/master/documentation/automatedTesting/spec/uiSpec.js

### Test suites
My tests were already separated into different files based on whether they tested something related to game logic or the user interface.
I also decided to separate my tests into suites that focused on a particular function or functionality and labelled these accordingly.

## Running the tests
I ran these tests in cloud9 by 'previewing' the file : /documentation/automatedTesting/index.html in my browser.

## Problems encountered but not fixed
### "Uncaught (in promise) DOMException"
When running the jasmine specs in my browser, the specs passed however the following error appeared in the console:
"Uncaught (in promise) DOMException" (This message was displayed in chrome but similar message displays in safari).
After some research I established this error was to do with Chrome changing their autoplay policy, the full extent of which 
can be viewed here: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
As this 'error' did not impact my specs nor the functioning of the game I decided not to fix it at this time as this would require
changing the audio from assigned variables to html elements and 'catching the promise'. This is something I will continute to work on after submission
to try and get it right.

### "Expected $.length = 0 to equal 1. Expected $[0] = undefined to equal 2."
Rarely when running my specs one will fail (in the playerInput suite or even more infrequently in the displaySequence suite) with this
error message.
After some dicussions with the tutors at Code Institute and my own investigations it appears that somewhere 
in the code there is a change of state happening either too early or too late which sometimes causes a spec to fail.
This will require further investigation that I will continue after submission.
The specs to pass most of the time and pass every time when run sequentially (i.e the 'run tests in random order' option is unchecked in Jasmine options)
therefore I am satisfied my tests are robust enough to achieve their purpose.