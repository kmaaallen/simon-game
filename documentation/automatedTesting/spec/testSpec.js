describe("power button test suite", function() {
    describe("Initial power status", function() {
        it("should have an initial value of false", function() {
            //pageReload();
            expect(gameData.powerStatus).toEqual(false);
        });
    });

    describe("power status change to ON (true) ", function() {
        beforeEach(function() {
            gameData.powerStatus = false;
        });
        it("should have a value of true when power button clicked while value is false", function() {
            powerClick();
            expect(gameData.powerStatus).toEqual(true);
        });
    });

    describe("power status change to OFF (false)", function() {
        beforeEach(function() {
            gameData.powerStatus = true;
        });
        it("should have a value of false when power button clicked while value is true", function() {
            powerClick();
            expect(gameData.powerStatus).toEqual(false);
        });
    });
});

describe("start button test suite", function() {
    describe("Initial start status", function() {
        it("should have an initial value of false", function() {
            expect(gameData.startStatus).toEqual(false);
        });
    });
    describe("start status change to ON (true)", function() {
        beforeEach(function() {
            gameData.startStatus = false;
        });
        it("should have a value of true when start button clicked while value is false", function() {
            startClick();
            expect(gameData.startStatus).toEqual(true);
        });
    });
    describe("start status change to OFF (false)", function() {
        beforeEach(function() {
            gameData.startStatus = true;
        });
        it("should have a value of false when start button clicked while value is true", function() {
            startClick();
            expect(gameData.startStatus).toEqual(false);
        });
    });
    describe("should have a value of OFF (false) when powerStatus is false", function() {
        beforeEach(function() {
            gameData.powerStatus = true;
        });
        it("should have a value of false when power button clicked to OFF (i.e also has value of false)", function() {
            powerClick();
            expect(gameData.startStatus).toEqual(false);
        });
    });
});

describe("New Game initiated test suite", function() {
    describe("newGame function called when powerStatus and startStatus are BOTH true", function() {
        beforeEach(function() {
            gameData.powerStatus = true;
            gameData.startStatus = false;
        });
        it("should call newGame function when both powerstatus and startstatus are true", function() {
            spyOn(window, 'newGame');
            startClick();
            expect(window.newGame).toHaveBeenCalled();
        });
    });
    describe("newGame function NOT called when powerStatus is true and startStatus is false", function() {
        beforeEach(function() {
            gameData.powerStatus = true;
            gameData.startStatus = true;
        });
        it("should NOT call new game when powerstatus is true but startstatus is false", function() {
            spyOn(window, 'newGame');
            startClick();
            expect(window.newGame).not.toHaveBeenCalled();
        });
    });
    describe("newGame function NOT called when powerStatus and startStatus are both true", function() {
        beforeEach(function() {
            gameData.powerStatus = true;
            gameData.startStatus = false;
        });
        it("should NOT call newGame function when both powerstatus and startstatus are false", function() {
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
    describe("generateSequence() function is called", function() {
        it("should call generateSequence when newRound is executed", function() {
            spyOn(window, 'generateSequence');
            newRound();
            expect(window.generateSequence).toHaveBeenCalled();
        });
    });
    describe("displaySequence() function is called", function() {
        it("should call showSequence when newRound is executed", function() {
            spyOn(window, 'showSequence');
            newRound();
            expect(window.showSequence).toHaveBeenCalled();
        });
    });
    describe("playerInput() function is called", function() {
        it("should call playerInput function when newRound is executed", function() {
            spyOn(window, 'playerInput');
            newRound();
            expect(window.playerInput).toHaveBeenCalled();
        });
    });
});

describe("generateSequence test suite", function() {
    describe("generateSequence being executed should result in sequence which is pushed to array of name 'gameSequence'", function() {
        it("should show an array called gameSequence of length greater than 0", function() {
            generateSequence();
            expect(gameData.gameSequence.length).not.toBe(0);
        });
    });
    describe("gameSequence content should only consist of 1,2,3 or 4", function() {
        it("should only contain numbers in the range 1 to 4", function() {
            generateSequence();
            for (x = 0; x < gameData.gameSequence.length; x++) {
                expect(0 < gameData.gameSequence[x] < 5).toBe(true);
            }
        });
    });
    describe("gameData.gameSequence length should be equal to gameData.count", function() {
        beforeEach(function() {
            gameData.gameSequence = [];
            gameData.count = 0;
        });
        it("gameData.gameSequence should have a length of gameData.count", function() {
            generateSequence();
            expect(gameData.gameSequence.length).toEqual(gameData.count);
        });
    });
});

describe("display sequence test suite", function() {
    describe("game should match numbers in gameSequence array with coloured squares", function() {
        beforeEach(function() {
            gameData.gameSequence = [1, 2, 3, 4]
        });
        it("should call the 'red' function when the number is 1", function() {
            spyOn(window, 'red');
            displaySequence(0);
            // gameData.gameSequence[0];
            expect(window.red).toHaveBeenCalled();
        });
        it("should call the 'yellow' function when the number is 2", function() {
            spyOn(window, 'yellow');
            displaySequence(1);
            expect(window.yellow).toHaveBeenCalled();
        });
        it("should call the 'green' function when the number is 3", function() {
            spyOn(window, 'green');
            displaySequence(2);
            expect(window.green).toHaveBeenCalled();
        });
        it("should call the 'blue' function when the number is 4", function() {
            spyOn(window, 'blue');
            displaySequence(3);
            expect(window.blue).toHaveBeenCalled();
        });
    });
});

describe("player input test suite", function() {
    beforeEach(function() {
        gameData.playerSequence = [];
        playerInput();
    });
    describe("player clicks on square and value is added to playerSequence array", function() {
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
    describe("player input function should loop unless playerSequence length equals gameSequence length", function() {
        beforeEach(function() {
            gameData.gameSequence = [1, 2, 3, 4];
            gameData.playerSequence = [];
            playerInput();
        });
        it("should call playerInput function again if playerSequence is less than gameSequence", function() {
            spyOn(window, 'playerInput');
            redClick();
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
        })
    });
});

describe("check playerSequence test suite", function() {
    beforeEach(function() {
        jasmine.clock().install();
    })
    afterEach(function() {
        jasmine.clock().uninstall();
    })
    describe("check playerSequence against gameSequence", function() {
        it("should call newRound function if sequences are the same and length is less than 20", function() {
            gameData.gameSequence = [1, 2, 3, 4, 1, 2, 3];
            gameData.playerSequence = [1, 2, 3, 4, 1, 2, 3];
            spyOn(window, 'newRound');
            checkSequence();
            jasmine.clock().tick(1000);
            expect(window.newRound).toHaveBeenCalled();
        });
        it("should NOT call newGame when player wins before 1000ms, i.e sequence is correct and length is 20", function() {
            gameData.gameSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            gameData.playerSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            spyOn(window, 'newGame');
            checkSequence();
            jasmine.clock().tick(999);
            expect(window.newGame).not.toHaveBeenCalled();
        });
        it("should NOT call showSequence before 1000ms function if playerSequence is incorrect", function() {
            gameData.gameSequence = [1, 2, 3, 4, 1, 2, 3];
            gameData.playerSequence = [1, 2, 3, 4, 1, 2, 4];
            spyOn(window, 'showSequence');
            checkSequence();
            jasmine.clock().tick(999);
            expect(window.showSequence).not.toHaveBeenCalled();
        });
    });
    describe("check functions are called after a time ", function() {
        it("should call newGame when player wins after 1000ms, i.e sequence is correct and length is 20", function() {
            gameData.gameSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            gameData.playerSequence = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
            spyOn(window, 'newGame');
            checkSequence();
            jasmine.clock().tick(1001);
            expect(window.newGame).toHaveBeenCalled();
        });
        it("should call showSequence after 1000ms if playerSequence is incorrect", function() {
            gameData.gameSequence = [1, 2, 3, 4, 1, 2, 3];
            gameData.playerSequence = [1, 2, 3, 4, 1, 2, 4];
            spyOn(window, 'showSequence');
            checkSequence();
            jasmine.clock().tick(1001);
            expect(window.showSequence).toHaveBeenCalled();
        });
        it("should call newGame after 1000ms if strict mode is true and player input is incorrect", function() {
            gameData.gameSequence = [1, 2, 3, 4, 1, 2, 3];
            gameData.playerSequence = [1, 2, 3, 4, 1, 2, 4];
            spyOn(window, 'newGame');
            gameData.strictStatus = true;
            checkSequence();
            jasmine.clock().tick(1001);
            expect(window.newGame).toHaveBeenCalled();
        });
        it("should call NOT call newGame at any time if strict mode is false and player input is incorrect", function() {
            gameData.gameSequence = [1, 2, 3, 4, 1, 2, 3];
            gameData.playerSequence = [1, 2, 3, 4, 1, 2, 4];
            spyOn(window, 'newGame');
            gameData.strictStatus = false;
            checkSequence();
            expect(window.newGame).not.toHaveBeenCalled();
        });
    });
});

describe("game reset testing suite", function() {
    describe("when newGame is called game variables should be reset to initial values", function() {
        beforeEach(function() {
            jasmine.clock().install();
            newGame();
        });
        afterEach(function() {
            jasmine.clock().uninstall();
        });
        it("should reset gameSequence to an empty array", function() {
            jasmine.clock().tick(10);
            expect(gameData.gameSequence).toEqual([]);
        });
        it("should reset playerSequence to an empty array", function() {
            expect(gameData.playerSequence).toEqual([]);
        });
        it("should reset count to zero", function() {
            expect(gameData.count).toEqual(0);
        });
    });
});

describe("strict mode test suite", function() {
    describe("strict mode toggle ON", function() {
        it("should change strictStatus to true when strict button is clicked when strict status is false", function() {
            strictStatus = false;
            strictClick();
            expect(gameData.strictStatus).toBe(true);
        });
        it("should change strictStatus to false when strict button is clicked while in true state", function() {
            strictStatus = true;
            strictClick();
            expect(gameData.strictStatus).toBe(false);
        });
    });
});
