

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();


let min=0;
let max= process.argv[2] ||100;
async function start(){

  console.log(`\nPick a number between 1 and ${process.argv[2] ||100} and I'll try to guess it.\n`)
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber + '\n');
  if( parseInt(secretNumber)>max){
    console.log('************INVALID NUMBER******************');
  }
  if(!parseInt(secretNumber) || secretNumber<1 || secretNumber % 1 !==0){
    console.log('************INVALID NUMBER******************');
    start();;
  }
  guess1=(Math.random()*(max-min)+min);

  isItNum(min, max, guess1);
}
  
async function isItNum(min2,max2,guess){   
  let ans1 = await ask(`Is it...${Math.ceil(guess)}? (Y) or (N)\n`);

    if(ans1.toUpperCase()==='N'){
    isHighLow(min2, max2, guess)  

    } else if (ans1.toUpperCase()==='Y'){ console.log(`\n********Your number is ${Math.ceil(guess)}!**********\n`);
      compguess();

    } else console.log('***INVALID RESPONSE, (Y) or (N)***')
    isItNum(min2,max2,guess);
}
  
async function isHighLow(min3,max3,guess){
   let ans= await ask(`Is it higher (H), or lower (L)?\n`); 

      if(ans.toUpperCase()=== 'H' && max3 >= min3){
        min3=Math.ceil(guess);
      }else if(ans.toUpperCase()==='L'&& max3 >=min3){
        max3=Math.floor(guess);
      }else if(max3 < min3){ 
        console.log((`HOLD ON, YOU SAID ${guess} 
        WAS LESS THAN ${max3} AND GREATER THAN ${min3}`)); isHighLow(min3,max3,guess) 
      }else if (ans!=='H'||ans!=='L' || ans==undefined) isHighLow(min3,max3,guess);
     guess=(( (max3-min3)/2 ))+min3;
     
  return isItNum(min3,max3,guess);
} 

async function compguess(){
    let min=1;
    let max= process.argv[2] || 100
  console.log(  `\nNow, I'll think of a number between ${min} and ${max} and YOU guess!\n`)
  
  const secretNumber= Math.round(Math.random()*(max-min)+min);
  
  console.log(secretNumber+'    ***THIS WILL BE HIDDEN IN GAME***'); //so I know//
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
