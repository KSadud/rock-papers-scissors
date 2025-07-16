function getComputerChoice() {
    let turnChoice = Math.floor(Math.random()*10 + 1);
    
    if (turnChoice >= 1 && turnChoice < 4) {
        return "Rock";
    } else if (turnChoice >= 4 && turnChoice < 7) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let turnChoice = prompt("Pick your move!")
    
    if (turnChoice.toLowerCase() === "rock") {
        return "Rock";
    } else if (turnChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (turnChoice.toLowerCase() === "scissors") {
        return "Scissors";
    } else {
        return "Try Again"
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        
    
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Oops too bad! Paper covers Rock!");
        computerScore ++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("Rock smashes Scissors! Good Job!");
        humanScore ++;
    } else if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("Tie! Go again!");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Paper covers Rock! Good Job!");
        humanScore ++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Darn! Scissors cut Paper!");
        computerScore ++;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("Tie! Go again!");
    }else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("Scissors cut Paper! Good Job!");
        humanScore ++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("Darn! Rock smashes Scissors!");
        computerScore ++;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("Tie! Go again!");
}

}
function clearGame() {
    humanScore = 0;
    computerScore = 0;
}


/* function playGame() {



{for (let i = 5; i > 0; i--){

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
 playRound(humanChoice,computerChoice);
 console.log("Player: " + humanScore);
 console.log("Computer: " + computerScore);
}}

if (humanScore > computerScore) {
    console.log("Congratulations, you WIN!");
 }  else if (humanScore = computerScore) {
    console.log("It's a TIE, Go Again!")
 } 
 else {
    console.log("Better Luck Next Time, you LOSE!")
 }
{ clearGame();
}
} */