
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

let userPlay = window.prompt("Make your computerPlay!");
userPlay = userPlay.toLowerCase();




// now the program

function gameoutcome(userPlay){
    if (userPlay = "rock"){
        asd
    }
}
