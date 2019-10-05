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
; 

async function isItNum(min,max,guess){   //TRY TO SET RANGE RELATIVE TO RANDOM FIRST GUESS
 
  
  let ans1 = await ask(`Is it...${Math.floor(guess)}? (Y) or (N)`);
  if(ans1==='N'){
    
  isHighLow(min, max, guess)
    //isItNum(min,max)

} else if (ans1==='Y'){return console.log(`Your number is ${Math.floor(guess)}!`)
 } else if (ans!=='Y'||ans!=='N') {console.log('INVALID RESPONSE, (Y) or (N)')
 
 isItNUM(min,max,guess)};

}


//Cheat detector: if a response contradicts an earlier response, complain and ask again. e.g. But you said it was lower than 25, so it can't also be higher than 24!


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


   
//secretnum=65
//guess=max/2 ----guess=100/2
//if high --> min=guess --------min= 50, max=100
//if low--->max=guess --------min=0, max=50 ***false***
//new guess---> max/2---------min=50, max=75

//***math.floor! */