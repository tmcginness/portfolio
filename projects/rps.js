const player = {
    currentChoice: null
}
const computer = {
    currentChoice: null
}

const choices = ["Rock", "Paper", "Scissors"];

function rock() {
    randomIndex = Math.floor(Math.random() * choices.length);
    player.currentChoice = choices[0];
    plays.innerHTML =
        "The player chose " + player.currentChoice + "!";
}

function paper() {
    randomIndex = Math.floor(Math.random() * choices.length);
    player.currentChoice = choices[1];
    plays.innerHTML =
        "The player chose " + player.currentChoice + "!";
}

function scissors() {
    randomIndex = Math.floor(Math.random() * choices.length);
    player.currentChoice = choices[2];
    plays.innerHTML =
        "The player chose " + player.currentChoice + "!";
}


function computerChoose() {
    randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
    console.log(randomIndex);
    comp.innerHTML =
        "The computer chose " + computer.currentChoice + "!";
}

function winnerWinner() {
    if (computer.currentChoice == choices[0] && player.currentChoice == choices[1]) {
        winner.innerHTML = "Player Wins!";
    } else if (computer.currentChoice == choices[1] && player.currentChoice == choices[2]) {
        winner.innerHTML = "Player Wins!";
    } else if (computer.currentChoice == choices[2] && player.currentChoice == choices[0]) {
        winner.innerHTML = "Player Wins!";
    } else if (computer.currentChoice == choices[0] && player.currentChoice == choices[2]) {
        winner.innerHTML = "Computer Wins!";
    } else if (computer.currentChoice == choices[2] && player.currentChoice == choices[1]) {
        winner.innerHTML = "Computer Wins!";
    } else if (computer.currentChoice == choices[1] && player.currentChoice == choices[0]) {
        winner.innerHTML = "Computer Wins!";
    } else if (computer.currentChoice == player.currentChoice) {
        winner.innerHTML = "It's a tie!!";
    } else {
        winner.innerHTML = "Who knows!!";
    }
}