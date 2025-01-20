const choices = ["rock","scissor", "paper"]
function getComputerChoice(){
    return choices[Math.floor(random()*choices.length)];
}