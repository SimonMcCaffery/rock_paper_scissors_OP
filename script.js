let playerScore=0;
let computerScore=0;
let gameRound = 0;
const playerScoreSpan = document.querySelector("#playerScore");
const computerScoreSpan = document.querySelector("#computerScore");


const playerRock = document.querySelector("#Rock");
playerRock.addEventListener("click", ()=>playRound("rock"))

const playerPaper = document.querySelector("#Paper");
playerPaper.addEventListener("click", ()=>playRound("paper"))

const playerScissor = document.querySelector("#Scissor");
playerScissor.addEventListener("click", ()=>playRound("scissor"))

function computerChoice(){
    let num = Math.floor(Math.random() * 3);

    switch (num){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
        default:
            return "Com Choice Error"
    }
}

function compareChoice(pChoice, cChoice){
    if(pChoice == "rock"){
        if(cChoice == "scissor"){
            playerScore++;
            gameRound++;
            roundWinAlert();
        }else if(cChoice== "paper"){
            computerScore++;
            gameRound++;
            roundLostAlert();            
        }else{
            roundDrawAlert();
        }
    }
    if(pChoice == "paper"){
        if(cChoice == "rock"){
            playerScore++;
            gameRound++;
            roundWinAlert();
        }else if(cChoice== "scissor"){
            computerScore++;
            gameRound++;
            roundLostAlert();
        }else{
            roundDrawAlert();
        }
    }
    if(pChoice == "scissor"){
        if(cChoice == "paper"){
            playerScore++;
            gameRound++;
            roundWinAlert();
        }else if(cChoice== "rock"){
            computerScore++;
            gameRound++;
            roundLostAlert();
        }else{
            roundDrawAlert();
        }
    }
}

function playRound(pChoice){    
    let computerOption = computerChoice();
    compareChoice(pChoice, computerOption);
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;    
}

function roundWinAlert(){
    alert("Round Won!");
}
function roundLostAlert(){
    alert("Round Lost!");
}
function roundDrawAlert(){
    alert("Round Draw!, replaying Round");
}


playerScoreSpan.textContent = playerScore;
computerScoreSpan.textContent = computerScore;



