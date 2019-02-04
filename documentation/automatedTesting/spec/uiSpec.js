describe("game display test suite", function() {
    describe("displays ready when power status is ON (true)", function() {
        beforeEach(function() {
            gameData.powerStatus = false;
        });
        it("should display 'ready' message when power status is ON (true)", function() {
            powerClick();
            expect(document.getElementById('display').innerHTML).toBe('ready');
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
    describe("red color function should add and remove red-light class to red square", function() {
        it("should have class of red-light after red function called", function() {
            red();
            expect(document.getElementById('1').className).toBe('red-square red-light');
        });
        it("should remove class of red-light after 500ms", function() {
            red();
            jasmine.clock().tick(500);
            expect(document.getElementById('1').className).toBe('red-square');
        });
    });
    describe("yellow color function should add yellow-light class to yellow square", function() {
        it("should have class of yellow-light after yellow function called", function() {
            yellow();
            expect(document.getElementById('2').className).toBe('yellow-square yellow-light');
        });
        it("should remove class of yellow-light after 500ms", function() {
            yellow();
            jasmine.clock().tick(500);
            expect(document.getElementById('2').className).toBe('yellow-square');
        });
    });
    describe("green color function should add green-light class to green square", function() {
        it("should have class of green-light after green function called", function() {
            green();
            expect(document.getElementById('3').className).toBe('green-square green-light');
        });
        it("should remove class of green-light after 500ms", function() {
            green();
            jasmine.clock().tick(500);
            expect(document.getElementById('3').className).toBe('green-square');
        });
    });
    describe("blue color function should add blue-light class to blue square", function() {
        it("should have class of blue-light after blue function called", function() {
            blue();
            expect(document.getElementById('4').className).toBe('blue-square blue-light');
        });
        it("should remove class of blue-light after 500ms", function() {
            blue();
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
    describe("red color function should add and remove red-light class", function() {
        it("should have class of red-light 1000ms after showSequence function called", function() {
            jasmine.clock().tick(1000);
            expect(document.getElementById('1').className).toBe('red-square red-light');
        });
        it("should remove class of red-light after 1500ms", function() {
            jasmine.clock().tick(1500);
            expect(document.getElementById('1').className).toBe('red-square');
        });
    });
    describe("yellow color function should add yellow-light class", function() {
        it("should have class of yellow-light 2000ms after showSequence function called", function() {
            jasmine.clock().tick(2000);
            expect(document.getElementById('2').className).toBe('yellow-square yellow-light');
        });
        it("should remove class of yellow-light after 2500ms", function() {
            jasmine.clock().tick(2500);
            expect(document.getElementById('2').className).toBe('yellow-square');
        });
    });
    describe("green color function should add green-light class", function() {
        it("should have class of green-light 3000ms after showSequence function called", function() {
            jasmine.clock().tick(3000);
            expect(document.getElementById('3').className).toBe('green-square green-light');
        });
        it("should remove class of green-light after 3500ms", function() {
            jasmine.clock().tick(3500);
            expect(document.getElementById('3').className).toBe('green-square');
        });
    });
    describe("blue color function should add blue-light class", function() {
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
    beforeEach(function() {
        gameData.clickability = true;
});
    describe("player should see colour flash corresponding to their choice made by clicking on square", function() {
        it("should call red() function when red square is clicked", function() {
            spyOn(window, 'red');
            redClick();
            expect(window.red).toHaveBeenCalled();
            //window.red.calls.reset();
        });
        it("should call yellow() function when yellow square is clicked", function() {
            spyOn(window, 'yellow');
            yellowClick();
            expect(window.yellow).toHaveBeenCalled();
        });
        it("should call green() function when green square is clicked", function() {
            spyOn(window, 'green');
            greenClick();
            expect(window.green).toHaveBeenCalled();
        });
        it("should call blue() function when blue square is clicked", function() {
            spyOn(window, 'blue');
            blueClick();
            expect(window.blue).toHaveBeenCalled();
        });
    });
});

describe("player messages when sequence checked test suite", function() {
    describe("player should get win message when game won", function() {
        it("should display a 'Win!' message when game is won", function() {
            gameData.gameSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            gameData.playerSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            spyOn(window, 'displayWin');
            checkSequence();
            expect(window.displayWin).toHaveBeenCalled();
        });
        it("should display a 'Try again!' message when playerSequence is incorrect", function() {
            gameData.gameSequence = [1, 2, 3, 4];
            gameData.playerSequence = [1, 2, 4, 3];
            spyOn(window, 'displayTryAgain');
            checkSequence();
            expect(window.displayTryAgain).toHaveBeenCalled();
        });
    });
});

describe("strictmode button display test suite", function() {
    describe("strict button appearance depending on mode", function() {
        it("should display strict mode on message when strict mode is on", function() {
            gameData.strictStatus = false;
            strictClick();
            expect(document.getElementById('strict').innerHTML).toBe('Strict Mode ON');
        });
        it("should display strict mode on message when strict mode is off", function() {
            gameData.strictStatus = true;
            strictClick();
            expect(document.getElementById('strict').innerHTML).toBe('Strict Mode OFF');
        });
    })
})
