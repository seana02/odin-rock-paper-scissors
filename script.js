function computerPlay() {
    out = Math.floor(Math.random() * 3);
    switch (out) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (computerSelection === "rock") {
        switch (playerSelection) {
            case "scissors":
                return "You Lose! Rock beats scissors";
            case "paper":
                return "You Win! Paper beats rock";
            case "rock":
                return "Draw!"
        }
    } else if (computerSelection === "scissors") {
        switch (playerSelection) {
            case "scissors":
                return "Draw!";
            case "paper":
                return "You Lose! Scissors beats paper";
            case "rock":
                return "You Win! Rock beats scissors";
        }
    } else {
        if (computerSelection === "paper") {
            switch (playerSelection) {
                case "scissors":
                    return "You Win! Scissors beats paper";
                case "paper":
                    return "Draw!";
                case "rock":
                    return "You Lose! Paper beats rock";
            }
        }
    }
}