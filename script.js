console.log("Hi");

const choice = ["rock", "paper", "scissors"];
const computerScore = 0;
const humanScore = 0;
function computerChoice(){
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}

function humanChoice(){
    const humanChoice = prompt("Enter your choice (rock, paper, scissors): ");
    return humanChoice;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log("It's a tie!");
    } else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
    } else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    } else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }
}

const humanSelection = humanChoice().toLowerCase();
const computerSelection = computerChoice().toLowerCase();

playRound(humanSelection, computerSelection);