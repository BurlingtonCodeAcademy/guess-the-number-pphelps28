const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log(
  `Let's play a game where you (human) make up a number and I (computer) try
   to guess it within the range of 1 and ${process.argv[2] ||100}`)
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  let min=1;
  let max= process.argv[2] ||100;
  guess=(Math.random()*(max)+1)

  isItNum(min, max, guess);
  
}
; 

async function isItNum(min,max,guess){   //TRY TO SET RANGE RELATIVE TO RANDOM FIRST GUESS
  guess=Math.random()*(( (max-min)/2 ))+min;

  let ans1 = await ask(`Is it...${Math.floor(guess)}? (Y) or (N)`);
  if(ans1==='N'){
    
  isHighLow(min, max, guess)
    //isItNum(min,max)

} else if (ans1==='Y'){return console.log(`Your number is ${Math.ceil(guess)}!`)
process.exit();
 } else if (ans!=='Y'||ans!=='N') isItNUM(min,max,guess);
}


//Cheat detector: if a response contradicts an earlier response, complain and ask again. e.g. But you said it was lower than 25, so it can't also be higher than 24!


async function isHighLow(min,max,guess){

  let ans= await ask(`Is it higher (H), or lower (L)?`); 
  /** all variable arguments 
  are re-defined within 
  their own function scope *///call isItNum in isHighLow, NOT VICE VERSA
    if(ans==='H'&& guess<secretNumber){
      min=guess; 
    } else if(ans==='L'&& guess>secretNumber){
      max=guess;
   }  else if (ans!=='H'||ans!=='L') isHighLow(min,max,guess);
   return isItNum(min,max,guess);
  } 
  /* define the guess as a variable INSTEAD OF computing a new guess on the */


   
//secretnum=65
//guess=max/2 ----guess=100/2
//if high --> min=guess --------min= 50, max=100
//if low--->max=guess --------min=0, max=50 ***false***
//new guess---> max/2---------min=50, max=75

//***math.floor! */