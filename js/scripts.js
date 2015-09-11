var findAndReplace = function(originalString, wordFind, wordReplace) {

    var finalString = originalString.replace(wordFind, wordReplace);

    for (var i = 0; i < 1000; i++) {

        var finalString = finalString.replace(wordFind, wordReplace);

    };

    return finalString;

};
