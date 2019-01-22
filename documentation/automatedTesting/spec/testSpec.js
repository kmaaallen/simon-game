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
    describe("start status change to OFF (false)", function(){
        beforeEach(function(){
            gameData.startStatus = true;
        });
        it("should have a value of false when start button clicked while value is true", function(){
            startClick();
            expect(gameData.startStatus).toEqual(false);
        });
    });
    describe("should have a value of OFF (false) when powerStatus is false", function(){
        beforeEach(function(){
            gameData.powerStatus = true;
        });
       it ("should have a value of false when power button clicked to OFF (i.e also has value of false)", function(){
           powerClick();
           expect(gameData.startStatus).toEqual(false);
       }) 
    });
});
