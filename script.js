
// generates a random number and assign rock papper or scissors to it depending its value, this will be the computer's "play"

let computerPlay = "";


function getRandomNum(){
  let  randy = Math.floor((Math.random()*3)+1);
  if (randy === 1){
      computerPlay = "rock";
  } else if (randy===2){
      computerPlay = "paper";
  }else{
      computerPlay = "scissors"
  } 
  return computerPlay
}

getRandomNum();
// -----------------

// gets user play


let win = "Computer picked rock, so you win!!"
let loose = "Computer picked rock, that means you loose!!"
let tie = "Computer picked rock too, so it's a Tie!"
let humanScore = 0;
let computerScore = 0;

// now the program
function game(){
    
    let userPlay = window.prompt("Rock, Paper or Scissors??");
    
    userPlay = userPlay.toLowerCase();
    
    getRandomNum();

        
    if(computerPlay === "rock"){
        if (userPlay === "rock"){
            console.log(tie)
        } 
        else if (userPlay === "paper"){
            console.log(win)
            humanScore ++
            }
        else{
                console.log(loose)
                computerScore ++
            }
        }
            else if(computerPlay === "paper"){
                if (userPlay === "rock"){
                    console.log(loose)
                    computerScore ++
                } 
                else if (userPlay === "paper"){
                    console.log(tie)
                }
                else{
                    console.log(win)
                    humanScore ++
                }
            }
            else{
                if (userPlay === "rock"){
                    console.log(win)
                    humanScore ++
                } 
                else if (userPlay === "paper"){
                    console.log(loose)
                    computerScore ++
                }
                else{
                    console.log(tie)
                }
                
            }
            
            
}

function masterCall(){
    for (i=1; i <= 5; i++){
        game();

    }
} 


masterCall();

if (computerScore > humanScore){
    console.log ('You loose :( ' + computerScore + ' to ' + humanScore)
    }
    else if(computerScore > humanScore){
        console.log ('You win :) ' + humanScore + ' to ' + computerScore)
    }
    else{
        console.log ("It's a Tie!!")
    }





