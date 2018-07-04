describe('fib', function(){

    it("When you enter a negative number, the function returns NaN", function() {
        assert(isNaN(fib(-1)), "fib(-1) не NaN");
    });

    it("When you enter a non-positive integer, the function returns NaN", function() {
        assert(isNaN(fib(1.5)), "fib(1.5) не NaN");
    });
    it("When you enter a string, the function returns NaN", function() {
        assert(isNaN(fib('string')), "fib('str') не NaN");
    });
    it('for n = 6, the function must return 8', function() {
        assert.equal(fib(6), 8)
    })
    it('for n = 20, the function must return 6765', function() {
        assert.equal(fib(20), 6765)
    })
    it('for n = 33, the function must return 2178309', function() {
        assert.equal(fib(32), 2178309)
    })
});