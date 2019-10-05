const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
    let min=1;
    let max= process.argv[2] || 100
  console.log(  `Let's play a game where I make up a number 
  and you try to guess it within the range of ${min} and ${max}.`)
  const secretNumber= Math.round(Math.random()*(max-min)+min);
  
  console.log(secretNumber); //so I know//
  guessFunc(max, secretNumber);
 
}


async function guessFunc(max, secretNumber){

  let userGuess= await ask("What's your guess?");
  let lockSecret=secretNumber;
  console.log(lockSecret);
  console.log((Number.isInteger(userGuess)===false ))
  console.log(userGuess)
  
     if(userGuess==lockSecret){
     console.log(`You did it! the number was ${lockSecret}`);
     process.exit();
   } 
    else if (userGuess>lockSecret&& userGuess<=max){
     console.log('My number is lower than your guess')
    }
    else if (userGuess<lockSecret && userGuess<=max) {console.log('My number is higher than your guess')
  }
    else {
      console.log('Please enter a whole number within range');
   }
    //if guess is higher, return higher, else return lower;  pretty straightforward. LUNCH TIME.
  guessFunc(max, lockSecret);
}