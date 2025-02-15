const choice = ["rock", "paper", "scissor"];
var computerScore = 0;
var humanScore = 0;

function computerChoice(){
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

function humanChoice(){
    const humanChoice = prompt("Enter your choice (rock, paper, scissor): ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if(humanChoice === "rock" && computerChoice === "scissor"){
        console.log("Round " + (i + 1));
        console.log("You win! Rock beats scissor.");
        humanScore++;
    } else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "scissor"){
        console.log("You lose! Scissor beats paper.");
        computerScore++;
    } else if(humanChoice === "scissor" && computerChoice === "paper"){
        console.log("You win! Scissor beats paper.");
        humanScore++;
    } else if(humanChoice === "scissor" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissor.");
        computerScore++;
    }
}

const humanSelection = humanChoice().toLowerCase();
const computerSelection = computerChoice().toLowerCase();

playRound(humanSelection, computerSelection);

function game(){
    for(let i = 0; i < 5; i++){

        const humanSelection = humanChoice().toLowerCase();
        const computerSelection = computerChoice().toLowerCase();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore){
        console.log("You win the game!");
    } else if(humanScore < computerScore){
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

game();