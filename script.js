let playerScore=0;
let computerScore=0;
let gameRound = 0;
const playerScoreSpan = document.querySelector("#playerScore");
const computerScoreSpan = document.querySelector("#computerScore");
const roundUpdate = document.querySelector("#roundUpdate");


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
            roundUpdate.textContent = "Round Won!"
        }else if(cChoice== "paper"){
            computerScore++;
            gameRound++;
            roundUpdate.textContent = "Round Lost!"         
        }else{
            roundUpdate.textContent = "Round Draw, Replay Round!"
        }
    }
    if(pChoice == "paper"){
        if(cChoice == "rock"){
            playerScore++;
            gameRound++;
            roundUpdate.textContent = "Round Won!"
        }else if(cChoice== "scissor"){
            computerScore++;
            gameRound++;
            roundUpdate.textContent = "Round Lost!"       
        }else{
            roundUpdate.textContent = "Round Draw, Replay Round!"
        }
    }
    if(pChoice == "scissor"){
        if(cChoice == "paper"){
            playerScore++;
            gameRound++;
            roundUpdate.textContent = "Round Won!"
        }else if(cChoice== "rock"){
            computerScore++;
            gameRound++;
            roundUpdate.textContent = "Round Lost!"       
        }else{
            roundUpdate.textContent = "Round Draw, Replay Round!"
        }
    }
}

function playRound(pChoice){    
    let computerOption = computerChoice();
    compareChoice(pChoice, computerOption);
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;    
    checkWin();
}

function checkWin(){
    if (playerScore >= 5){
        roundUpdate.textContent = "Congratulations You Won!\nPlay again?";
        resetGame();
    }else if(computerScore >= 5){
        roundUpdate.textContent = "How embarassing Beaten by the computer!\nTry again?"
        resetGame();
    }else {
        return;
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    gameRound = 0;
}


playerScoreSpan.textContent = playerScore;
computerScoreSpan.textContent = computerScore;



