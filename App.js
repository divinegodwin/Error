// declaring for DOM 
const playerScoreValue = 0;
const computerScoreValue = 0;
const moves = 0;
let playerScore = document.querySelector(".player-score");
let computerScore = document.querySelector(".computer-score");
let instruction = document.querySelector(".instruction");
let movesLeft = document.querySelector("moves-left");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let result = document.querySelector(".result");


const options = [
    "Rock",
    "Paper",
    "Scissors"
];

let humanChoice;


let computerChoice = Math.random()*options.length;

rock.addEventListener("click", ()=>{
        humanChoice = "Rock";
    if(humanChoice == options[0] && computerChoice == options[0]){
            alert("draw")
        }
 else if(humanChoice == options[0] && computerChoice == options[1]){
            alert("computer wins")
        }
else if(humanChoice == options[0] && computerChoice == options[2]){
            alert("you win")
        }
        else{
            alert("error")
        }
        
        
})
