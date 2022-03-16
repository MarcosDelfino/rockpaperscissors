
// generates a random number and assign rock papper or scissors to it depending its value, this will be the computer's "play"
// debugger
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

// -----------------

// declaring html 
let gameDisplay = document.createElement('h1');
gameDisplay.setAttribute('id', 'resultado')
let userDisplay = document.createElement('h1');
let computerDisplay = document.createElement('h1');


//---------------

let humanScore = 0;
let computerScore = 0;
let userPlay = "";


rock.addEventListener('click', () =>{
    userPlay = "rock"
    game();
    
});
paper.addEventListener('click', () =>{
    userPlay = "paper"
    game()
})
scissors.addEventListener('click', () =>{
    userPlay = "scissors"
    game()
});

//game func    
function game(){
    getRandomNum();    
        let win = `you win!!`;
        let loose = `you loose!!`;
        let tie = `it's a Tie!`;
        let outcome ;
    
    
    switch (userPlay+computerPlay){
        case 'rockpaper':
            case 'paperscissors':
                case 'scissorsrock':
            outcome = win;
            break
        case 'paperrock':
            case 'scissorspaper':
                case 'rockscissors':
            outcome = loose;
        break
            case 'paperpaper':
                case 'rockrock':
                    case 'scissorsscissors':
            outcome = tie;
        break
        }
        gameDisplay.innerHTML = outcome;
        computerDisplay.textContent = `Computer: ${computerPlay}`;
        userDisplay.textContent = `You: ${userPlay}`;   
        asd.appendChild(userDisplay);
        asd.appendChild(computerDisplay);    
        asd.appendChild(gameDisplay);   
        
    }


