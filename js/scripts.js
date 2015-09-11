var findAndReplace = function(originalString, wordFind, wordReplace) {
    var re = new RegExp('(^|\\s|\\(|\'|"|,|;)' + wordFind + '($|\\s|\\)|\\.|\'|"|!|,|;|\\?)', 'gi');
    var finalString = originalString.replace((re + " "), wordReplace);

    for (var i = 0; i < 1000; i++) {
        var finalString = finalString.replace((re + " "), wordReplace);
    };

    return finalString;

};

$(document).ready(function() {
    $("form#findAndReplace").submit(function(event) {
        var originalString = ($("input#originalString").val());
        var wordFind = ($("input#wordFind").val());
        var wordReplace = ($("input#wordReplace").val());
        var result = findAndReplace(originalString, wordFind, wordReplace);

        $(".result").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
