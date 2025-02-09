let playerScore=0;
let computerScore=0;
let gameRound = 0;


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

function playerChoice(){
   const playerChoice = prompt("Enter your choice: Rock Paper or Scissor")
   return playerChoice.toLowerCase()
}

function compareChoice(pChoice, cChoice){
    if(pChoice == "rock"){
        if(cChoice == "scissor"){
            playerScore++;
            gameRound++;
        }else if(cChoice== "paper"){
            computerScore++;
            gameRound++;
        }else{
            return;
        }
    }
    if(pChoice == "paper"){
        if(cChoice == "rock"){
            playerScore++;
            gameRound++;
        }else if(cChoice== "scissor"){
            computerScore++;
            gameRound++;
        }else{
            return;
        }
    }
    if(pChoice == "scissor"){
        if(cChoice == "paper"){
            playerScore++;
            gameRound++;
        }else if(cChoice== "rock"){
            computerScore++;
            gameRound++;
        }else{
            return;
        }
    }
}

function playRound(){
    playerOption = playerChoice();
    computerOption = computerChoice();
    compareChoice(playerOption, computerOption);
}

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

playGame();

alert("You won " + playerScore + " round lost " + computerScore + " rounds");

