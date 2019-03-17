describe("game display test suite", function() {
    describe("displays ready when power status is ON (true)", function() {
        beforeEach(function() {
            gameData.powerStatus = false;
        });
        it("should display 'ready' message when power status is ON (true)", function() {
            powerClick();
            expect(document.getElementById('display').innerHTML).toBe('Ready');
        });
    });
    describe("displays empty string (nothing) when power status is OFF(false)", function() {
        beforeEach(function() {
            gameData.powerStatus = true;
        });
        it("should display empty string when power status is OFF (false)", function() {
            powerClick();
            expect(document.getElementById('display').innerHTML).toBe('');
        });
    });
    describe("displays new gameData.count when it changes", function() {
        beforeEach(function() {
            gameData.gameSequence = [];
            gameData.count = 0;
        });
        it("should display gameData.count when generateSequence function is called (as this is when count is incremented", function() {
            generateSequence();
            expect(document.getElementById('display').innerHTML).toBe('1');
        });
    });
});

describe("color functions test suite", function() {
    beforeEach(function() {
        jasmine.clock().install();
    });
    afterEach(function() {
        jasmine.clock().uninstall();
    });
    describe("color function should add and remove red-light class to coloured square when called with (redAudio, 1, 'redFlash') arguments", function() {
        it("should have class of red-light", function() {
            colour(redAudio, 1, 'red-light');
            expect(document.getElementById('1').className).toBe('red-square red-light');
        });
        it("should remove class of red-light after 500ms", function() {
            colour(redAudio, 1, 'red-light');
            jasmine.clock().tick(500);
            expect(document.getElementById('1').className).toBe('red-square');
        });
    });
    describe("color function should add and remove yellow-light class to coloured square when called with (yellowAudio, 2, 'yellowFlash') arguments", function() {
        it("should have class of yellow-light", function() {
            colour(yellowAudio, 2, 'yellow-light');
            expect(document.getElementById('2').className).toBe('yellow-square yellow-light');
        });
        it("should remove class of yellow-light after 500ms", function() {
            colour(yellowAudio, 2, 'yellow-light');
            jasmine.clock().tick(500);
            expect(document.getElementById('2').className).toBe('yellow-square');
        });
    });
    describe("color function should add and remove green-light class to coloured square when called with (greenAudio, 3, 'greenFlash') arguments", function() {
        it("should have class of green-light", function() {
            colour(greenAudio, 3, 'green-light');
            expect(document.getElementById('3').className).toBe('green-square green-light');
        });
        it("should remove class of green-light after 500ms", function() {
            colour(greenAudio, 3, 'green-light');
            jasmine.clock().tick(500);
            expect(document.getElementById('3').className).toBe('green-square');
        });
    });
    describe("color function should add and remove blue-light class to coloured square when called with (blueAudio, 4, 'blueFlash') arguments", function() {
        it("should have class of blue-light after blue function called", function() {
            colour(blueAudio, 4, 'blue-light');
            expect(document.getElementById('4').className).toBe('blue-square blue-light');
        });
        it("should remove class of blue-light after 500ms", function() {
            colour(blueAudio, 4, 'blue-light');
            jasmine.clock().tick(500);
            expect(document.getElementById('4').className).toBe('blue-square');
        });
    });
});

describe("color flashing intervals test suite", function() {
    beforeEach(function() {
        jasmine.clock().install();
        gameData.gameSequence = [1, 2, 3, 4]
        showSequence();
    });
    afterEach(function() {
        jasmine.clock().uninstall();
    });
    describe("color function should add and remove red-light class", function() {
        it("should have class of red-light 1000ms after showSequence function called", function() {
            jasmine.clock().tick(1000);
            expect(document.getElementById('1').className).toBe('red-square red-light');
        });
        it("should remove class of red-light after 1500ms", function() {
            jasmine.clock().tick(1500);
            expect(document.getElementById('1').className).toBe('red-square');
        });
    });
    describe("color function should add yellow-light class", function() {
        it("should have class of yellow-light 2000ms after showSequence function called", function() {
            jasmine.clock().tick(2000);
            expect(document.getElementById('2').className).toBe('yellow-square yellow-light');
        });
        it("should remove class of yellow-light after 2500ms", function() {
            jasmine.clock().tick(2500);
            expect(document.getElementById('2').className).toBe('yellow-square');
        });
    });
    describe("color function should add green-light class", function() {
        it("should have class of green-light 3000ms after showSequence function called", function() {
            jasmine.clock().tick(3000);
            expect(document.getElementById('3').className).toBe('green-square green-light');
        });
        it("should remove class of green-light after 3500ms", function() {
            jasmine.clock().tick(3500);
            expect(document.getElementById('3').className).toBe('green-square');
        });
    });
    describe("color function should add blue-light class", function() {
        it("should have class of blue-light 4000ms after showSequence function called", function() {
            jasmine.clock().tick(4000);
            expect(document.getElementById('4').className).toBe('blue-square blue-light');
        });
        it("should remove class of blue-light after 4500ms", function() {
            jasmine.clock().tick(4500);
            expect(document.getElementById('4').className).toBe('blue-square');
        });
    });
});

describe("player input visual/audio test suite", function() {
    beforeEach(function(){
        playerInput();
    });
    describe("player should see colour flash corresponding to their choice made by clicking on square", function() {
        it("should call colour function with (redAudio, 1, 'red-light') when red square is clicked", function() {
            spyOn(window, 'colour');
            redClick();
            expect(window.colour).toHaveBeenCalledWith(redAudio, 1, 'red-light');
        });
        it("should call colour function with (yellowAudio, 2, 'yellow-light') when yellow square is clicked", function() {
            spyOn(window, 'colour');
            yellowClick();
            expect(window.colour).toHaveBeenCalledWith(yellowAudio, 2, 'yellow-light');
        });
        it("should call colour function with (greenAudio, 3, 'green-light') when green square is clicked", function() {
            spyOn(window, 'colour');
            greenClick();
            expect(window.colour).toHaveBeenCalledWith(greenAudio, 3, 'green-light');
        });
        it("should call colour function with (blueAudio, 4, 'blue-light') when blue square is clicked", function() {
            spyOn(window, 'colour');
            blueClick();
            expect(window.colour).toHaveBeenCalledWith(blueAudio, 4, 'blue-light');
        });
    });
});

describe("player messages when sequence checked test suite", function() {
    describe("player should get win message when game won", function() {
        it("should display a 'Win!' message when game is won", function() {
            gameData.gameSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            gameData.playerSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            spyOn(window, 'displayMessage');
            checkSequence();
            expect(window.displayMessage).toHaveBeenCalledWith(display.win);
        });
        it("should display a 'Try again!' message when playerSequence is incorrect and strict mode off", function() {
            gameData.gameSequence = [1, 2, 3, 4];
            gameData.playerSequence = [1, 2, 4, 3];
            gameData.strictStatus = false;
            spyOn(window, 'displayMessage');
            checkSequence();
            expect(window.displayMessage).toHaveBeenCalledWith(display.tryAgain);
        });
    });
});

describe("strictmode fail display", function(){
    it("should display start again message when player wrong in strict mode", function(){
         displayMessage(display.startAgain);
         expect(document.getElementById('display').innerHTML).toBe('Start Again!');
    });
});

describe("strictmode button display test suite", function() {
    describe("strict button appearance depending on mode", function() {
        it("should display background of green and toggle on right when strict mode is on", function() {
            gameData.strictStatus = false;
            strictClick();
            expect(document.getElementById('strict-btn').className).toBe('btn-after');
            expect(document.getElementById('strict-toggle').className).toBe('positionAfter');
        });
        it("should display background of red and toggle on left when strict mode is off", function() {
            gameData.strictStatus = true;
            strictClick();
            expect(document.getElementById('strict-btn').className).toBe('btn-before');
            expect(document.getElementById('strict-toggle').className).toBe('positionBefore');
        });
    });
});

describe("power button display test suite", function() {
    describe("power button appearance depending on status", function() {
        it("should display background of green and toggle on right when power is on", function() {
            gameData.powerStatus = false;
            powerClick();
            expect(document.getElementById('power-btn').className).toBe('btn-after');
            expect(document.getElementById('power-toggle').className).toBe('positionAfter');
        });
        it("should display background of red and toggle on left when power is off", function() {
            gameData.powerStatus = true;
            powerClick();
            expect(document.getElementById('power-btn').className).toBe('btn-before');
            expect(document.getElementById('power-toggle').className).toBe('positionBefore');
        });
    });
});

