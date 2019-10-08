const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

let max= process.argv[2] ||100;
let min=0;

async function start(){

  console.log(`\nPick a number between 1 and ${process.argv[2] ||100} and I'll try to guess it.\n`)
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber + '\n');
  
  if(secretNumber>process.argv[2]){
    console.log('************INVALID NUMBER******************');
    start();;
  }
  guess1=(Math.random()*(max-min)+min);

  isItNum(min, max, guess1);
}
  
async function isItNum(min,max,guess){   
  let ans1 = await ask(`Is it...${Math.ceil(guess)}? (Y) or (N)`);

    if(ans1.toUpperCase()==='N'){
    isHighLow(min, max, guess)  

    } else if (ans1.toUpperCase()==='Y'){ console.log(`\n********Your number is ${Math.ceil(guess)}!**********\n`);
      compguess();

    } else console.log('***INVALID RESPONSE, (Y) or (N)***')//if (ans1.toUpperCase()!=='Y'||ans1.toUpperCase()!=='N') {console.log('INVALID RESPONSE, (Y) or (N)')
    isItNum(min,max,guess);
}
  
async function isHighLow(min,max,guess){
   let ans= await ask(`Is it higher (H), or lower (L)?`); 

      if(ans.toUpperCase()=== 'H' && max > min){
        min=Math.floor(guess);
      }else if(ans.toUpperCase()==='L'&& max>min){
        max=Math.ceil(guess);
      }else if(max < min){ 
        console.log((`HOLD ON, YOU SAID ${guess} 
        WAS LESS THAN ${max} AND GREATER THAN ${min}`)); isHighLow(min,max,guess) 
      }else if (ans!=='H'||ans!=='L' || ans==undefined) isHighLow(min,max,guess);
     guess=(( (max-min)/2 ))+min;
     
  return isItNum(min,max,guess);
} 

async function compguess(){
    let min=1;
    let max= process.argv[2] || 100
  console.log(  `\nNow, I'll think of a number between ${min} and ${max} and YOU guess!\n`)
  
  const secretNumber= Math.round(Math.random()*(max-min)+min);
  
  console.log(secretNumber+'    ***THIS WILL BE HIDDEN***'); //so I know//
  guessFunc(max, secretNumber);
}


async function guessFunc(max, secretNumber){
  
    let userGuess= await ask("What's your guess?\n");
    let lockSecret=secretNumber;
   
    if(userGuess==lockSecret){
       console.log(`\n*********You did it! the number was ${lockSecret}!*********\n`);
        return start();
       
    }else if (userGuess>lockSecret){
       console.log('\nMy number is lower than your guess\n')
    }else if (userGuess<lockSecret) {console.log('\nMy number is higher than your guess\n')
    }else {console.log('\n************INVALID NUMBER******************\n');
  }
    guessFunc(max, lockSecret);
}
