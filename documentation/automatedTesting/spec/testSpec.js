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
    describe("expect gameData.count to increment by 1 (i.e go from 0 to 1) when newGame() is executed", function() {
        it("should increment gameData.count by 1", function() {
            expect(gameData.count).toEqual(1);
        });
    });
     describe("expect newRound() to be called when newGame() is executed", function() {
        it("should call newRound() function", function() {
            spyOn(window, 'newRound');
            newGame();
            expect(window.newRound).toHaveBeenCalled();
        });
    });
});

describe("newRound test suite", function(){
    describe("generateSequence() function is called", function(){
        it("should call generateSequence when newRound is executed", function(){
            spyOn(window, 'generateSequence');
            newRound();
            expect(window.generateSequence).toHaveBeenCalled();
        });
    });
    describe("displaySequence() function is called", function(){
        it("should call displaySequence when newRound is executed", function(){
            spyOn(window, 'displaySequence');
            newRound();
            expect(window.displaySequence).toHaveBeenCalled();
        });
    });
    describe("playerInput() function is called", function(){
        it ("should call playerInput function when newRound is executed", function(){
            spyOn(window, 'playerInput');
            newRound();
            expect(window.playerInput).toHaveBeenCalled();
        })
    })
});
