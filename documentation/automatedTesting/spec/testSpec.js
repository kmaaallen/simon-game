describe("Initial power status test suite", function() {
    it("should have an initial value of false", function() {
        //pageReload();
        expect(gameData.powerStatus).toEqual(false);
    });
});

describe ("power status change to ON test suit", function(){
    beforeEach (function(){
        gameData.powerStatus = false;
    })
    it("should have a value of true when power button clicked while value is false", function() {
        powerClick();
        expect(gameData.powerStatus).toEqual(true);
    });
})

describe ("power status change to OFF test suit", function(){
    beforeEach (function(){
        gameData.powerStatus = true;
    })
    it("should have a value of false when power button clicked while value is true", function() {
        powerClick();
        expect(gameData.powerStatus).toEqual(false);
    });
})


