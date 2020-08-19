// Showing Rules section on Clicking Rules Button..
$("#rules").click(() => {
    $(".rules-container").removeClass("hide-container");
});
// Removing rules container..
$("#close-btn").click(() => {
    $(".rules-container").addClass("hide-container");
});

let computerChoiceOptions = ["paper", "scissors", "rock"];
let score = 0;

$('#reset-score').click(function (){
    location.reload();
});

function randomNumber() {
    var number = Math.floor(Math.random() * 3);
    return number;
}

// USER CHOICE AND RESULT
$('.option-btn').click(function () {
    $("#options").addClass("hide-container");
    $("#result-container").removeClass("hide-container");

    let userChoice = $(this).attr("id");
    $('#user-picked').attr("src", "assets/images/icon-" + userChoice + ".svg");
    $('#user-choice').addClass(userChoice + "-btn");

    computerChoice(userChoice);
});

function computerChoice(userChoice) {
    let randomChoice = computerChoiceOptions[randomNumber()];
    $('#house-picked').attr("src", "assets/images/icon-" + randomChoice + ".svg");
    $('#auto-picked').addClass(randomChoice + "-btn");

    let computerPicked = randomChoice;
    let userPicked = userChoice;

    if (userPicked === "paper" && computerPicked === "rock" ||
         userPicked === "rock" && computerPicked === "scissors" ||
         userPicked === "scissors" && computerPicked === "paper"){   
            score = score + 2;
            $('#score').text(score);
            $('span').text("Won!!");
            $('#you').text("You");
            $('.user-picked').addClass('winner');
    } else if(userPicked === computerPicked){   
        $('span').text("Draw");
        $('#you').text("");
        var removeClass = $('#auto-picked').attr('class').split(/\s+/);
        var removeableClass = removeClass[removeClass.length - 1];
        if (removeableClass === "winner") {
            $('#auto-picked').removeClass('winner');
        }
        var userClass = $('#user-choice').attr('class').split(/\s+/);
        var removeUserClass = userClass[userClass.length - 1];
        if (removeUserClass === "winner") {
            $('#user-choice').removeClass('winner');
        }
    } else{
        score --;
        $('#score').text(score);
        $('span').text("Lose");
        $('#you').text("You");
        $('.computer-picked').addClass('winner');
    }
}

$("#play-again").click(() => {
    $("#options").removeClass("hide-container");
    $("#result-container").addClass("hide-container");

    // REMOVING OLD CLASS FROM COMPUTER CHOICE
    var removeClass = $('#auto-picked').attr('class').split(/\s+/);
    var removeableClass = removeClass[removeClass.length - 1];

    $('#auto-picked').removeClass(removeableClass);

    let secondClass = removeClass[removeClass.length - 2];
    if (removeableClass === "winner") {
        $('#auto-picked').removeClass('winner');
        $('#auto-picked').removeClass(secondClass);
    }

    // REMOVING OLD CLASS FROM USER CHOICE
    var userClass = $('#user-choice').attr('class').split(/\s+/);
    var removeUserClass = userClass[userClass.length - 1];
    $('#user-choice').removeClass(removeUserClass);

    let userSecondClass = userClass[userClass.length - 2];
    if (removeUserClass === "winner") {
        $('#user-choice').removeClass('winner');
        $('#user-choice').removeClass(userSecondClass);
    }
});