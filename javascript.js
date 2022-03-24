// Possible Choices
choices = ['ROCK','PAPER','SCISSORS'];

let playerScore = 0;
let computerScore = 0;

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

game();
//}

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
    return input.toUpperCase();
}
    //while(input == null){
 //       input = prompt (' Please only choose ROCK, PAPER, or SCISSORS');
 //   }
  //  input = input.toUpperCase(); 
  //  let check = validateInput(input)
  //  while(check == false){
 //      input = prompt('Please only choose ROCK, PAPER, or SCISSORS');
 //      input = input.toUpperCase();
 //      check = validateInput(input);
 //   }
    
   // console.log(input); 
//}

// create a function that randomly generates a cpu choice, take the result of the function and create a constant inside the playRound function

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

//function validateInput(choice){
   // if(choices.includes(choice)){
 //       return true;
//       }else {
//           return false;
//       }
//}
// Remember 1 function for 1 task...dont try to jumble up the ability to check winners in playRound lets create a seperate function to check who the winner is 
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

































