describe("power button test suite", function() {
    describe("initial power status", function() {
        xit("should have an initial value of false", function() {
            expect(gameData.powerStatus).toEqual(false);
        });
    });
    describe("power status change between ON(true) and OFF(false) on click", function() {
        it("should have a value of true when power button clicked while value is false", function() {
            gameData.powerStatus = false;
            powerClick();
            expect(gameData.powerStatus).toEqual(true);
        });
        it("should have a value of false when power button clicked while value is true", function() {
            gameData.powerStatus = true;
            powerClick();
            expect(gameData.powerStatus).toEqual(false);
        });
    });
    describe("when power is OFF, player cannot click coloured squares", function() {
        beforeEach(function() {
            gameData.powerStatus = false;
            redClick();
            yellowClick();
            greenClick();
            blueClick();
        });
        it("should NOT call color function when a coloured button is clicked", function() {
            spyOn(window, 'colour');
            expect(window.colour).not.toHaveBeenCalled();
        });
    });
});

describe("start button test suite", function() {
    describe("Initial start status", function() {
        xit("should have an initial value of false", function() {
            expect(gameData.startStatus).toEqual(false);
        });
    });
    describe("start status should only change to true when powerStatus is true", function() {
        beforeEach(function() {
            gameData.startStatus = false;
            gameData.powerStatus = true;
        });
        it("should have a value of true when start button clicked", function() {
            startClick();
            expect(gameData.startStatus).toEqual(true);
        });
    });
    describe("start status should be false whenever powerStatus is false", function() {
        beforeEach(function() {
            gameData.startStatus = true;
            gameData.powerStatus = true;
            powerClick();
        });
        it("start status should have a value of false when powerStatus changes to false", function() {
            expect(gameData.startStatus).toEqual(false);
        });
        beforeEach(function() {
            gameData.startStatus = false;
            gameData.powerStatus = false;
            powerClick();
        });
        it("startStatus should remain false when powerStatus changes to true until start button clicked", function() {
            expect(gameData.startStatus).toEqual(false);
        });
    });
});


describe("New Game initiated test suite", function() {
    describe("newGame function called when powerStatus and startStatus are BOTH true", function() {
        it("should call newGame function when both powerstatus and startstatus are true", function() {
            gameData.powerStatus = true;
            gameData.startStatus = false;
            spyOn(window, 'newGame');
            startClick();
            expect(window.newGame).toHaveBeenCalled();
        });
        it("should NOT call newGame function when both powerstatus and startstatus are false", function() {
            gameData.powerStatus = true;
            gameData.startStatus = false;
            spyOn(window, 'newGame');
            powerClick();
            expect(window.newGame).not.toHaveBeenCalled();
        });
        it("should NOT call new game when powerstatus is true but startstatus is false", function() {
            gameData.powerStatus = false;
            gameData.startStatus = false;
            spyOn(window, 'newGame');
            powerClick();
            expect(window.newGame).not.toHaveBeenCalled();
        });
    });
    describe("expect newRound() to be called when newGame() is executed", function() {
        beforeEach(function() {
            jasmine.clock().install();
        });
        afterEach(function() {
            jasmine.clock().uninstall();
        });
        it("should call newRound() function", function() {
            spyOn(window, 'newRound');
            newGame();
            jasmine.clock().tick(11);
            expect(window.newRound).toHaveBeenCalled();
        });
    });
});

describe("newRound test suite", function() {
    describe("generateSequence, displaySequence and playerInput functions are called", function() {
        it("should call generateSequence when newRound is executed", function() {
            spyOn(window, 'generateSequence');
            newRound();
            expect(window.generateSequence).toHaveBeenCalled();
        });
        it("should call showSequence when newRound is executed", function() {
            spyOn(window, 'showSequence');
            newRound();
            expect(window.showSequence).toHaveBeenCalled();
        });
    });
});

describe("generateSequence test suite", function() {
    describe("generateSequence being executed should result in sequence which is pushed to array of name 'gameSequence'", function() {
        beforeEach(function() {
            generateSequence();
        });
        it("should show an array called gameSequence of length greater than 0", function() {
            expect(gameData.gameSequence.length).not.toBe(0);
        });
        it("should only contain numbers in the range 1 to 4", function() {
            for (x = 0; x < gameData.gameSequence.length; x++) {
                expect(0 < gameData.gameSequence[x] < 5).toBe(true);
            }
        });
    });
    describe("gameData.gameSequence length should be equal to gameData.count", function() {
        beforeEach(function() {
            gameData.gameSequence = [];
            gameData.count = 0;
            generateSequence();
        });
        it("gameData.gameSequence should have a length of gameData.count", function() {
            expect(gameData.gameSequence.length).toEqual(gameData.count);
        });
    });
});

describe("showSequence test suite", function() {
    beforeEach(function() {
        jasmine.clock().install();
        gameData.gameSequence = [1];
        showSequence();
    });
    afterEach(function() {
        jasmine.clock().uninstall();
    });
    describe("should call displaySequence function", function() {
        it("it should call displaySequence function", function() {
            spyOn(window, 'displaySequence');
            jasmine.clock().tick(1000);
            expect(window.displaySequence).toHaveBeenCalled();
        });
    });
    describe("should call playerInput function", function() {
        it("it should call playerInput function when displaySequence is finished", function() {
            spyOn(window, 'playerInput');
            jasmine.clock().tick(1000);
            expect(window.playerInput).toHaveBeenCalled();
        });
    });
});

describe("display sequence test suite", function() {
    describe("game should match numbers in gameSequence array with coloured squares", function() {
        beforeEach(function() {
            gameData.powerStatus = true;
            gameData.gameSequence = [1, 2, 3, 4];
        });
        it("should call the colour function with (redAudio, 1, 'red-light') when the number is 1", function() {
            spyOn(window, 'colour');
            displaySequence(0);
            expect(window.colour).toHaveBeenCalledWith(redAudio, 1, 'red-light');
        });
        it("should call the the colour function with (yellowAudio, 2, 'yellow-light') when the number is 2", function() {
            spyOn(window, 'colour');
            displaySequence(1);
            expect(window.colour).toHaveBeenCalledWith(yellowAudio, 2, 'yellow-light');
        });
        it("should call the the colour function with (greenAudio, 3, 'green-light') when the number is 3", function() {
            spyOn(window, 'colour');
            displaySequence(2);
            expect(window.colour).toHaveBeenCalledWith(greenAudio, 3, 'green-light');
        });
        it("should call the the colour function with (blueAudio, 4, 'blue-light') when the number is 4", function() {
            spyOn(window, 'colour');
            displaySequence(3);
            expect(window.colour).toHaveBeenCalledWith(blueAudio, 4, 'blue-light');
        });
    });
    describe("playerSequence should be reset", function() {
        beforeEach(function() {
            gameData.powerStatus = true;
            gameData.gameSequence = [1, 2, 3, 4];
        });
        it("should be empty when displaySequence is first called", function() {
            displaySequence();
            expect(gameData.playerSequence).toEqual([]);
        });
    });
});

describe("player input test suite", function() {
    describe("player clicks on square and value is added to playerSequence array", function() {
        beforeEach(function() {
            gameData.playerSequence = [];
            playerInput();
        });
        it("should push the value 1 into playerSequence array when the red square is clicked", function() {
            redClick();
            expect(gameData.playerSequence).toEqual([1]);
        });
        it("should push the value 2 into playerSequence array when the yellow square is clicked", function() {
            yellowClick();
            expect(gameData.playerSequence).toEqual([2]);
        });
        it("should push the value 3 into playerSequence array when the green square is clicked", function() {
            greenClick();
            expect(gameData.playerSequence).toEqual([3]);
        });
        it("should push the value 4 into playerSequence array when the blue square is clicked", function() {
            blueClick();
            expect(gameData.playerSequence).toEqual([4]);
        });
    });
});

describe("check playerSequence length test suite", function() {
    beforeEach(function() {
        gameData.gameSequence = [1, 2, 3, 4];
        gameData.playerSequence = [];
        playerInput();
    });
    describe("player input function should loop unless playerSequence length equals gameSequence length", function() {
        it("should call playerInput function again if playerSequence is less than gameSequence", function() {
            spyOn(window, 'playerInput');
            redClick();
            expect(window.playerInput).toHaveBeenCalled();
        });
        it("should call checkSequence function if playerSequence length equals gameSequence length", function() {
            spyOn(window, 'checkSequence');
            redClick();
            redClick();
            redClick();
            redClick();
            expect(window.checkSequence).toHaveBeenCalled();
        });
    });
});

describe("check playerSequence test suite", function() {
    beforeEach(function() {
        jasmine.clock().install();
    });
    afterEach(function() {
        jasmine.clock().uninstall();
    });
    describe("check playerSequence against gameSequence", function() {
        it("should only call newRound function after 1000ms if sequences are the same and length is less than 20", function() {
            gameData.gameSequence = [1, 2, 3, 4, 1, 2, 3];
            gameData.playerSequence = [1, 2, 3, 4, 1, 2, 3];
            spyOn(window, 'newRound');
            checkSequence();
            expect(window.newRound).not.toHaveBeenCalled();
            jasmine.clock().tick(1000);
            expect(window.newRound).toHaveBeenCalled();
        });
        it("should only call newGame when player wins after 1000ms, i.e sequence is correct and length is 20", function() {
            gameData.gameSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            gameData.playerSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            spyOn(window, 'newGame');
            checkSequence();
            expect(window.newGame).not.toHaveBeenCalled();
            jasmine.clock().tick(1000);
            expect(window.newGame).toHaveBeenCalled();
        });
        it("should only call showSequence after 1000ms if playerSequence is incorrect and strictStatus is false", function() {
            gameData.gameSequence = [1, 2, 3, 4, 1, 2, 3];
            gameData.playerSequence = [1, 2, 3, 4, 1, 2, 4];
            gameData.strictStatus = false;
            spyOn(window, 'showSequence');
            checkSequence();

            expect(window.showSequence).not.toHaveBeenCalled();
            jasmine.clock().tick(1000);
            expect(window.showSequence).toHaveBeenCalled();
        });
        it("should call NOT call newGame at any time if strict mode is false and player input is incorrect", function() {
            gameData.gameSequence = [1, 2, 3, 4, 1, 2, 3];
            gameData.playerSequence = [1, 2, 3, 4, 1, 2, 4];
            gameData.strictStatus = false;
            spyOn(window, 'newGame');
            checkSequence();
            expect(window.newGame).not.toHaveBeenCalled();
        });
        it("should call displayStartAgain if player sequence wrong in strict mode", function() {
            gameData.gameSequence = [1, 2, 3, 4, 1, 2, 3];
            gameData.playerSequence = [1, 2, 3, 4, 1, 2, 4];
            gameData.strictStatus = true;
            spyOn(window, 'displayMessage');
            checkSequence();
            expect(window.displayMessage).toHaveBeenCalledWith(display.startAgain);
        });
    });
});

describe("game reset testing suite", function() {
    describe("when newGame is called game variables should be reset to initial values", function() {
        beforeEach(function() {
            jasmine.clock().install();
            TestNewGame();
        });
        afterEach(function() {
            jasmine.clock().uninstall();
        });
        it("should reset gameSequence to an empty array", function() {
            jasmine.clock().tick(10);
            expect(gameData.gameSequence).toEqual([]);
        });
        it("should reset playerSequence to an empty array", function() {
            jasmine.clock().tick(10);
            expect(gameData.playerSequence).toEqual([]);
        });
        it("should reset count to zero", function() {
            jasmine.clock().tick(10);
            expect(gameData.count).toEqual(0);
        });
    });
});

describe("strict mode test suite", function() {
    describe("strict mode toggle ON", function() {
        it("should change strictStatus to true when strict button is clicked when strict status is false", function() {
            gameData.strictStatus = false;
            strictClick();
            expect(gameData.strictStatus).toBe(true);
        });
        it("should change strictStatus to false when strict button is clicked while in true state", function() {
            gameData.strictStatus = true;
            strictClick();
            expect(gameData.strictStatus).toBe(false);
        });
    });
});