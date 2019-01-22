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
});