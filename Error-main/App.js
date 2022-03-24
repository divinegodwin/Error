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
const btns = document.querySelectorAll('#btn');

const options = [
    "rock",
    "paper",
    "scissors"
];

let humanChoice;

let limit = options.length;
let computerChoiceNumber = Math.floor(Math.random() * limit); // forgot to add Math.floor to round up numbers
let computerChoice = options[computerChoiceNumber];
console.log(computerChoice);


btns.forEach(btn => btn.addEventListener("click", ()=>{  // listens for click on every buttons with a class of btn
    console.log(btn.classList.value);
    humanChoice = btn.classList.value;

    if(humanChoice === options[0] && computerChoice === options[0]){ //wrong use of operator check this website on more operator use 
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
            alert("draw")
        }
 else if(humanChoice === options[0] && computerChoice === options[1]){
            alert("computer wins")
        }
else if(humanChoice === options[0] && computerChoice === options[2]){
            alert("you win")
        } 
          if(humanChoice === options[1] && computerChoice === options[1]){ //  check for paper 
               alert("draw");
        } else if(humanChoice === options[1] && computerChoice === options[0]){
                  alert("you win");
        } else if(humanChoice === options[1] && computerChoice === options[2]){
            alert("you loose!!!!!");
        } 

        else if(humanChoice === options[2] && computerChoice === options[0]){
            alert("you loose!!!!");
        } else if(humanChoice === options[2] && computerChoice === options[1]){
            alert("you win!!!!");
        } else if(humanChoice === options[2] && computerChoice === options[2]){
            alert("its a draw!!!!");
        }
        else{
            alert("error")
        }
        
        




}));
