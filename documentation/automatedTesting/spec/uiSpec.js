describe("game display test suite", function(){
    describe("displays ready when power status is ON (true)", function(){
      beforeEach(function(){
          gameData.powerStatus = false;
      });
      it("should display 'ready' message when power status is ON (true)", function(){
          powerClick();
          expect(document.getElementById('display').innerHTML).toBe('ready');
      });
    });
    describe("displays empty string (nothing) when power status is OFF(false)", function(){
        beforeEach(function(){
            gameData.powerStatus = true;
        });
        it("should display empty string when power status is OFF (false)", function(){
            powerClick();
            expect(document.getElementById('display').innerHTML).toBe('');
        });
    });
    describe("displays new gameData.count when it changes", function(){
        beforeEach(function(){
            gameData.gameSequence = [];
            gameData.count = 0;
        })
        it("should display gameData.count when generateSequence function is called (as this is when count is incremented", function(){
            generateSequence();
            expect(document.getElementById('display').innerHTML).toBe('1');
        })
    })
});