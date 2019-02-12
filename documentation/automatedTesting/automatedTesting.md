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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/test.js"></script>
    <script type="text/javascript" src="spec/testSpec.js"></script>
    <script type="text/javascript" src="spec/uiSpec.js"></script>
</code></pre>

The script uses jquery with JavaScript so that has to be loaded first.<br>
The script is what the tests will be acting on so it is loaded before the specs. <br>


## Writing the tests
As much as possible I tried to use the 'red-green-refactor' philosophy of testing, starting my writing failing tests,
adding in the code that will make them pass and then refactoring the code / tests.
For this project most of the refactoring and stream-lining took place towards the end once my game was fully functional.
<br>
I didn't separate out the game data from the user interface and game logic code in my test.js script for ease, however I did separate
these elements with comments for readability. The full test.js document can be viewed here: https://github.com/kmaaallen/simon-game/blob/master/documentation/automatedTesting/scripts/test.js

The full list of specs for testing game logic can be viewed at: https://github.com/kmaaallen/simon-game/blob/master/documentation/automatedTesting/spec/testSpec.js

The full list of specs for testing user interface changes can be viewed at: https://github.com/kmaaallen/simon-game/blob/master/documentation/automatedTesting/spec/uiSpec.js

### Test suites
My tests were already separated into different files based on whether they tested something related to game logic or the user interface.
I also decided to separate my tests into suites that focused on a particular function or functionality and labelled these accordingly.

## Running the tests
I ran these tests in cloud9 by 'previewing' the file : /documentation/automatedTesting/index.html in my browser.