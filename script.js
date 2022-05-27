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

function game() {
    let score = 0;
    // let playerSelection = prompt("Choose rock, paper, or scissors");
    result = playRound(playerSelection, computerPlay());
    console.log(result);
    if (result.slice(4, 5) === "W") {
        score++;
        console.log(`You are now at ${score} points`);
    }
    console.log(`Game set! You scored ${score} points!`);
}

// initialize variables
const btns = document.querySelectorAll('button');
const resulttxt = document.querySelector('.result');
const score = document.querySelector('.score');
const count = document.querySelector('.count');
const rate = document.querySelector('.rate');
let won = 0;
let played = 0;

// initialize event listeners
btns.forEach(btn => btn.addEventListener('click', function(e) {
    // count.textContent = +count.textContent + 1;
    played++;
    count.textContent = played;
    const result = playRound(btn.classList[1], computerPlay());
    resulttxt.textContent = result;
    if (result.slice(4, 5) === "W") {
        // score.textContent = +score.textContent + 1;
        won++;
        score.textContent = won;
    }
    // let winrate = Math.round(1000 * +score.textContent / +count.textContent) / 10;
    let winrate = Math.round(1000 * won / played) / 10;
    rate.textContent = winrate;
}));

// initialize text
resulttxt.textContent = "Press a button above to play!";