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

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound("Rock", computerChoice);
        });

paperBtn.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound("Paper", computerChoice);
        });
    
scissorsBtn.addEventListener('click', () => {
        let computerChoice = getComputerChoice();
        playRound("Scissors", computerChoice);
        });


let humanScore = 0;
let computerScore = 0;

const textBox = document.querySelector("#text");
const compScore = document.querySelector("#computer-score");
const userScore = document.querySelector("#user-score");

const resetBtn = document.createElement("button");
const textContainer = document.querySelector("#textbox");
resetBtn.id  = "reset-btn";

resetBtn.innerText = "Go Again?";



function playRound(humanChoice, computerChoice) {
        userScore.textContent = humanScore;
        compScore.textContent = computerScore;
    if (humanScore === 5 || computerScore === 5){
        console.log("You ain't see nothing")
    } else {

    if (humanChoice === "Rock" && computerChoice === "Paper") {
        ++computerScore;
        compScore.innerText = computerScore;
        textBox.textContent = "Oops too bad! Paper covers Rock!";
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        ++humanScore;
        userScore.innerText = humanScore;
        textBox.textContent ="Rock smashes Scissors! Good Job!";
    } else if (humanChoice === "Rock" && computerChoice === "Rock") {
        textBox.textContent = "Tie! Go again!";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        ++humanScore;
        userScore.innerText = humanScore;
        textBox.textContent = "Paper covers Rock! Good Job!";
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        ++computerScore;
        compScore.innerText = computerScore;
        textBox.textContent = "Darn! Scissors cut Paper!";
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        textBox.textContent = "Tie! Go again!";
    }else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        ++humanScore;
        userScore.innerText = humanScore;
        textBox.textContent = "Scissors cut Paper! Good Job!";
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        ++computerScore;
        compScore.innerText = computerScore;
        textBox.textContent = "Darn! Rock smashes Scissors!";
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        textBox.textContent = "Tie! Go again!";
}
    if (humanScore === 5) {
        textBox.textContent = "Congratulations, you WIN!";
        textContainer.appendChild(resetBtn);
        resetBtn.addEventListener('click', () => {
            clearGame();
            resetBtn.remove();
        }); 
    } else if (computerScore === 5) {
        textBox.textContent = "Better Luck Next Time, you LOSE!";
        textContainer.appendChild(resetBtn);
        resetBtn.addEventListener('click', () => {
            clearGame();
            resetBtn.remove();
        }); 
    }
    }}

function clearGame() {
    humanScore = 0;
    computerScore = 0;
    textBox.textContent = "";
    userScore.textContent = 0;
    compScore.textContent = 0;
};
