console.log("Hi");

const choice = ["rock", "paper", "scissors"];
function computerChoice(){
    const computerChoice = choice[Math.floor(Math.random() * choice.length)];
    return computerChoice;
}
computerChoice();

function humanChoice(){
    const humanChoice = prompt("Enter your choice (rock, paper, scissors): ");
    return humanChoice;
}
humanChoice();