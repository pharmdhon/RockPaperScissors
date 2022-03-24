// Possible Choices
choices = ['ROCK','PAPER','SCISSORS'];

let playerScore = 0;
let computerScore = 0;


// a function that plays 5 rounds and tallys score and declares a winner at the end
function game(){
    for(let i = 0; i<5; i++){
        playRound();
    } if(i = 5){
        if(playerScore>computerScore){
            console.log("Game Over - Victory to Player")
        } else if (computerScore>playerScore){
            console.log("Game Over - Victory to Computer")
        }else {
            console.log("Game Over - Its a Tie")
        }
    }
}

//calling the function game
game();

// function to play one round, idntify the winner of he round and add a point to the winner
function playRound(){
  const playerCf = playerChoice();
  const computerCf = computerChoice(); 
  const winner = checkWinner(computerCf,playerCf);
  console.log(playerCf);
  console.log(computerCf);
  console.log(`The winner of the round is ${winner}`);
  if (winner === 'computer'){
      ++computerScore;
  } else if (winner === 'player'){
      ++playerScore;
  }
  console.log(`The score is Player ${playerScore}, and Computer ${computerScore}`);
}

// create a function that obtains the choice from the player the creates a variable based on the input and then assigns the value of the function to a variable inside playround

function playerChoice () {
    let input = prompt('Lets play ROCK, PAPER, SCISSORS, 5 rounds ready..... shoot');
    let check = validateInput(input);
    while(input == null){
        input = prompt (' Please only choose ROCK, PAPER, or SCISSORS');
    } while(check == false){
        input = prompt('Please only choose ROCK, PAPER, or SCISSORS');
        input = input.toUpperCase();
        check = validateInput(input);
    } if(check == true)
    input = input.toUpperCase();
    return input;
}

    

// create a function that randomly generates a cpu choice, then assign it to a variable inside a function later

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}


//function that ensures user can only select a choice from array choices.
function validateInput(choice){
    if(choices.includes(choice)){
    return true;
 }else{
  return false;
 }
}

function  checkWinner (choiceC, choiceP){
    if (choiceC === choiceP){
        return 'Tie';
    }else if(
        (choiceC === 'ROCK' && choiceP === 'SCISSORS')||
        (choiceC === 'PAPER' && choiceP === 'ROCK') ||
        (choiceC === 'SCISSORS' && choiceP === 'PAPER')
    ) {
        return 'computer';

    }else if(
        (choiceC === 'ROCK' && choiceP === 'PAPER')||
        (choiceC === 'PAPER' && choiceP === 'SCISSORS') ||
        (choiceC === 'SCISSORS' && choiceP === 'ROCK')
    ) {
        return 'player';
     }
}

































