// create an array of crystal image links
var crystalImages = ["assets/images/blue.png", "assets/images/green.png", "assets/images/red.png", "assets/images/yellow.png"];

// other globalVariables
var wins = 0;
var losses = 0;
var userScore = 0;
var targetNumber = 0;

function generateCrystalImages() {
    // loop through crystalImages
    crystalImages.forEach(function (imageUrl, index) {
        var randomNum = Math.floor(Math.random() * 12) + 1;
        console.log(randomNum);
        // for each one:
        // create a new 'img' element
        var crystal = $("<img>");
        // set src equal to link
        crystal.attr("src", imageUrl);
        // set random value (points)
        crystal.attr("data-points", randomNum);
        // add class
        crystal.addClass("crystal");
        // put the crystal image on the page
        $("#images").append(crystal);
    });

};

function crystalCollector() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#target-number").html(targetNumber);
    generateCrystalImages();
    $(".crystal").on("click", function () {
        var crystalVal = $(this).attr("data-points");
        crystalVal = parseInt(crystalVal);
        userScore += crystalVal;
        $("#your-score").html(userScore);
        checkWin();
    });
};

function checkWin () {
    if (userScore === targetNumber) {
        wins++;
        $("#wins").html(wins);
        reset();
    } else if (userScore > targetNumber) {
        losses++;
        $("#losses").html(losses);
        reset();
    };
};

function reset(){
    userScore = 0;
    $("#your-score").html(userScore);
    $("#images").empty();
    crystalCollector();
};

crystalCollector();