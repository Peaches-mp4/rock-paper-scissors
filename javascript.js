
let playerCount = 0;
let computerCount = 0;
let gameCount = 0;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    switch(randomChoice) {
        case 1:
            return "Rock!";
            break;
        case 2:
            return "Paper!";
            break;        
        case 3:
            return "Scissors!";
            break;
        default:
            return "I don't feel like playing :/"
        }       
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    playerSelection = playerSelection.toLowerCase();
    
    if(playerSelection === "rock") {

        if(computerSelection === "Rock!") {
            result = "It's a tie!" 
        } else if(computerSelection === "Paper!") {
            computerCount++;
            result = "You lose! Paper beats Rock."
        } else if(computerSelection === "Scissors!") {
            playerCount++;
            result = "You win! Rock beats Scissors!";
        }
      
    } else if(playerSelection === "paper") {

        if(computerSelection === "Paper!") {
            result = "It's a tie!" 
        } else if(computerSelection === "Scissors!") {
            computerCount++;
            result = "You lose! Scissors beat Paper."
        } else if(computerSelection === "Rock!") {
            playerCount++;
            result = "You win! Paper beats Rock!";
        }

    } else if(playerSelection === "scissors"){

        if(computerSelection === "Scissors!") {
            result = "It's a tie!" 
        } else if(computerSelection === "Rock!") {
            computerCount++;
            result = "You lose! Rock beats Scissors."
        } else if(computerSelection === "Paper!") {
            playerCount++;
            result = "You win! Scissors beat Paper!";
        }

    } else {
            gameCount--;
            result = "Cute, but please use only rock, paper or scissors options";

    }
    alert(result);
}

function game() {
    
    while(gameCount < 5) {
     playRound(prompt("Choose your fighter!", "Scissors"), getComputerChoice());   
     gameCount++;
    }

    if(playerCount > computerCount) {
        return `You won! The score is -
                You: ${playerCount}
                Computer: ${computerCount}`;
    } else {
        return `You lost! The score is - You: ${playerCount} / Computer: ${computerCount}`;
    }
}

console.log(game());
