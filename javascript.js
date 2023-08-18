
let playerCount = 0;
let computerCount = 0;
let playerChoice = "a";

//Get player selection from buttons

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {    
    button.addEventListener("click", function (e) {
        playerChoice = e.target.id
        console.log(playerChoice)
        playRound(playerChoice, getComputerChoice())
    });
    
});

// function getPlayerChoice(e) {
//   alert("Please click a button.");
//   buttons.forEach((button) => {    
//      button.addEventListener("click", () => e.target.id);}
//     ); 
// }

//Get computer choice  

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
    


//The function to play one round of the game

function playRound(playerSelection, computerSelection) {
    let result = "";
    
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
    }
    
    console.log(computerSelection)
    console.log(result);
    
}

// function game() {
    
//     //   while(playerCount < 5 && computerCount < 5) {
    
//         playRound(playerChoice, getComputerChoice());  
//         console.log(playerChoice);
        
    //}

    // if(playerCount > computerCount) {
    //     console.log(`You won! The score is...You: ${playerCount} | Computer: ${computerCount}`);
    // } else {
    //     console.log(`You lost! The score is... You: ${playerCount} | Computer: ${computerCount}`); 

        
    // }

    // if (confirm("Play again?")) {
    // alert("Yay!");
    // playerCount = 0;
    // computerCount = 0;
    // game();
    // } else {
    // alert("K, bye!");
    // }
//}



