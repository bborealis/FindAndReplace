describe('findAndReplace', function() {
    it("enters an input string, a find string, and a replace string and recieves an ouput string", function() {
        expect(findAndReplace("Hello world", "world", "universe")).to.be.a("string");
    });

    it("enters an one word input string, a find string, and a replace string and recieves an ouput of the original input string with the word replaced", function() {
        expect(findAndReplace("a", "a", "b")).to.be.equal("b");
    });

    it("enters a two word input string, a find string, and a replace string and recieves an ouput of the original input string with the word replaced", function() {
        expect(findAndReplace("Hello world", "world", "universe")).to.be.equal("Hello universe");
    });

    it("enters a three word input string, a find string, and a replace string and recieves an ouput of the original input string with the word replaced", function() {
        expect(findAndReplace("Hello mister world", "world", "universe")).to.be.equal("Hello mister universe");
    });

    it("enters a three word input string with punctuation, a find string, and a replace string and recieves an ouput of the original input string with the word replaced. ", function() {
        expect(findAndReplace("Hello mister world.", "world", "universe")).to.be.equal("Hello mister universe.");
    });


});
