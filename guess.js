const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}


async function start() {
  guess();
}
start();

async function guess(){
  console.log(
  `Let's play a game where you (human) make up a number and I (computer) try
   to guess it within the range of 1 and ${process.argv[2] ||100}`)
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  if(secretNumber>process.argv[2]){
    console.log('************INVALID NUMBER******************');
    start();
  }
  // Now try and complete the program.
  let min=1;
  let max= process.argv[2] ||100;
  guess=(Math.random()*(max-min)+min)//random number in range

  isItNum(min, max, guess);
  }
  
  async function isItNum(min,max,guess){   //TRY TO SET RANGE RELATIVE TO RANDOM FIRST GUESS
   
    let ans1 = await ask(`Is it...${Math.floor(guess)}? (Y) or (N)`);
    if(ans1==='N'){
      
    isHighLow(min, max, guess)
      //isItNum(min,max)
  
  } else if (ans1==='Y'){ console.log(`Your number is ${Math.floor(guess)}!`);
  compguess();
  } else if (ans!=='Y'||ans!=='N') {console.log('INVALID RESPONSE, (Y) or (N)')
  
   isItNUM(min,max,guess)};
  }
  
  async function isHighLow(min,max,guess){
  
    let ans= await ask(`Is it higher (H), or lower (L)?`); 
        if(ans==='H'&& max>min){
        min=guess; 
  
      } else if(ans==='L'&& max>min){
        max=guess;}
  
      else if(max<min){ console.log((`HOLD ON, YOU SAID ${guess} 
      WAS LESS THAN ${max} AND GREATER THAN ${min}`)); isHighLow(min,max,guess)
  
     }  else if (ans!=='H'||ans!=='L' || ans==undefined) isHighLow(min,max,guess);
     guess=(( (max-min)/2 ))+min;
     
     return isItNum(min,max,guess);
    } 

async function compguess(){
    let min=1;
    let max= process.argv[2] || 100
  console.log(  `Now, let's play a game where I make up a number 
  and you try to guess it within the range of ${min} and ${max}.`)
  
  const secretNumber= Math.round(Math.random()*(max-min)+min);
  
  console.log(secretNumber); //so I know//
  guessFunc(max, secretNumber);
 
}


  async function guessFunc(max, secretNumber){
  
    let userGuess= await ask("What's your guess?");
    let lockSecret=secretNumber;
    console.log(userGuess)
    
       if(userGuess==lockSecret){
       console.log(`You did it! the number was ${lockSecret}`);
       process.exit; 
       
       /**How do I return everything to the top?
         calling the guess function doesn't do it,
         because guess IS UNDEFINED.  process.exit doesn't 
         even work anymore :/
         */
     } 
      else if (userGuess>lockSecret && userGuess<=max){
       console.log('My number is lower than your guess')
      }
      else if (userGuess<lockSecret && userGuess<=max) {console.log('My number is higher than your guess')
    }
      else {
        console.log('Please enter a whole number within range');
     }
    guessFunc(max, lockSecret);
  }
