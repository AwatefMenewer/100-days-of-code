
var correctNumber;
var guesses = []

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame)
    initGame()

}


function playGame() {
    var numberGuess = document.getElementById('number-guess').value;


    if (numberGuess !== ' ') {
        displayResult(numberGuess)
        saveGuessHistory(numberGuess)
        displayHistory()

    }
}

function displayResult(numberGuess) {
    if (numberGuess > correctNumber) {
        showNumberAbove()
    } else if (numberGuess < correctNumber) {
        showNumberBelow()
    } else {
        showYouWon()
    }
}
function initGame() {

    getRandomNumber()
    guesses = []
    resetResultContent()
    document.getElementById('history').innerHTML = ""

}

function resetResultContent() {
    document.getElementById("result").innerHTML = "";
}

function getRandomNumber() {

    correctNumber = Math.floor((Math.random() * 100) + 1);
}

function saveGuessHistory(guess) {
    guesses.unshift(guess)
}

function displayHistory() {
    let index;
    let list = "<ul class='list-group'>";
    for (var guess of guesses) {
        list += `
        <li class='list-group-item'>You guessed ${guess}</li>
        `
    }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
}

function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

function showYouWon() {
    const text = "Awesome job, you got it!"
    var dialog = getDialog('won', text)

    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high!"
    var dialog = getDialog('warning', text)

    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low!"
    var dialog = getDialog('warning', text)


    document.getElementById("result").innerHTML = dialog;
}
