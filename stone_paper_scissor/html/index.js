

function getComputerChoice() {
    let choice = ["Rock","Paper","Scissors"];
    const randnumber = Math.floor(Math.random()*choice.length);
    let computerChoice = choice[randnumber];
    return computerChoice;
  
}


function getResult(playerChoice, computerChoice) {
    let score ;
  
  if(playerChoice==computerChoice){
    
    score = 0;
  }
  else if (playerChoice=="Rock"&& computerChoice=="Scissors"){
    
    score = 1;
  }
  else if (playerChoice=="Scissors"&& computerChoice=="Paper"){
    return won;
    score = 1;
  }
  else if (playerChoice=="Paper"&& computerChoice=="Rock"){
    
    score = 1;
  }
  else{
    
    score = -1;
  }
  return score;
  
  

  

  
  
}


function showResult(score, playerChoice, computerChoice) {
  
  const result = document.getElementById("result");
  if(score ==0){
    result.innerText="Its a Draw";

  }
  else if (score==1){
    result.innerText="You Win";
  }
  else{
    result.innerText="You Lose";
  }
  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`

  
}


function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
  const score = getResult(playerChoice.value, computerChoice)
  showResult(score, playerChoice.value, computerChoice)
  
}



function playGame() {
  
  let rpsButtons = document.querySelectorAll(".rpsButton");

  
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })
  
   

 

  
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()

  
}

 
function endGame() {
  
    let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''
}

playGame()