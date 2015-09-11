describe('findAndReplace', function() {
    it("enters an input string, a find string, and a replace string and recieves an ouput string", function() {
        expect(findAndReplace("Hello world", "world", "universe")).to.be.a("string");
    });

    it("enters an one word input string, a find string, and a replace string and recieves an ouput of the original input string with the word replaced", function() {
        expect(findAndReplace("a", "a", "b")).to.be.equal("b");
    });


});
