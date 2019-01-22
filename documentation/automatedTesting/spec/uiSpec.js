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
});