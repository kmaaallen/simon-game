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
        })
        it("should display gameData.count when generateSequence function is called (as this is when count is incremented", function() {
            generateSequence();
            expect(document.getElementById('display').innerHTML).toBe('1');
        })
    })
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
