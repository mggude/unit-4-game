// Global Variables:
// wins, losses, goalNumber, userScore, array of image sources
var wins
var losses
var images = ["assets/images/crystal1.jpg", "assets/images/crystal2.jpg"] // set the src to that link

// Functions:

// Function 1: 
// set goalNumber (google: how do I create a random number in js - eg math.random)
// loop through images array
// for every index, create image on screen
    // add class
    // add src
    // add crystal value as attribute
    // append image to screen

    function makeDivs() {
    var array = [1, 2, 3, 4];
    for (var i=0; i<array.length; i++) {
        var div = $("<div>");
        div.addClass("crystal");
        div.attr("crystalVal", Math.floor(Math.random() * 11));
        div.attr("id", i);
        $(".divContainer").append(div);
    }
}


$(".crystal").on("click", function () {
    console.log(this);
    console.log($(this));
});

makeDivs();



// create click event on crystals
// use $(this) to capture value attribute (.attr)
// add clicked value to userScore
// create conditions to check for win or loss using if statements (which can then go into a function)
    // if userScore === goalNumber
    // if userScore > goalNumber
    // if win or loss, restart game (recall makeDivs to reset values)
    // increment wins or losses

// Overall: just need a few globalVariables, one function and one click event. TEST EARLY TEST OFTEN