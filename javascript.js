/* Startng over, step 1 initialize variables needed*/
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

// Initialize Computer Selection to a random choice from an array
choices = ["ROCK","PAPER","SCISSORS"];
computerSelection = choices[Math.floor(Math.random()*choices.length)];
console.log(computerSelection);

//Initialize a player Selection by getting input from the user, also it is capitalized to make comparison to CPU less complex.

getInput = prompt("Lets Play")
playerSelection = getInput.toUpperCase();
console.log(playerSelection);

//Create a function playGame that takes the computer selection and player slection as inputs compares them and returns a statement about if the
// was a win, loss or tie, in addition the function keeps score

function playRound(){
    if (computerSelection === playerSelection) alert('Tie');
    else if(
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS')||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
    ) computerScore = ++computerScore;
     if (computerScore === 1) alert ('loser');
    else if(
        (computerSelection === 'ROCK' && playerSelection === 'PAPER')||
        (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'ROCK')
    ) playerScore = ++playerScore;
      if (playerScore === 1) alert ('winner');
}

playRound();
console.log(computerScore);
console.log(playerScore);