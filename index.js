function StartFunction(){
    //Player
    var userInputSelect = document.getElementById("userInput");
    var playerChoiceValue = userInputSelect.options[userInputSelect.selectedIndex].text;
    document.getElementById('playerChoice').innerHTML = playerChoiceValue; 
    
    
    //Computer 
    var randomNumber = Math.random(); 
    var computerChoiceValue = ""; 
    if (randomNumber < 0.34) {
        computerChoiceValue = "Rock";
    } else if(randomNumber <= 0.67) {
        computerChoiceValue = "Paper";
    } else {
        computerChoiceValue = "Scissors";
    } 
    document.getElementById('computerChoice').innerHTML = computerChoiceValue;
    
    
    //Compare
    Compare(playerChoiceValue, computerChoiceValue);

    CompleteRound()
    
    
    //Reset Select
    userInputSelect.selectedIndex = -1;
    }

function Compare(playerChoiceValue, computerChoiceValue){
    //default to lose
    var playerWon = false;
    
    //Get both scores in memory
    var playerScore = document.getElementById('playerScore');
    var computerScore = document.getElementById('computerScore');
    
    //work out whether the player won
    switch(playerChoiceValue) {

        case computerChoiceValue: 
     document.getElementById('result').innerHTML = "It's a Tie!";
    return;
break; 
        case "Rock": 
        if(computerChoiceValue == "Scissors"){
            playerWon = true;
        }
        break;
        case "Paper":
            if (computerChoiceValue == "Rock"){
                playerWon = true;
            }  
        break;
        case "Scissors":
            if (computerChoiceValue == "Paper"){
                playerWon = true;
            } 
        break;
    }		
        
    
    //if they won
    if(playerWon){		
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
         document.getElementById('result').innerHTML = playerChoiceValue + " wins!";		 
    }
    //if they lost
    else{
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1; 
        document.getElementById('result').innerHTML = computerChoiceValue + " wins!";
    }
}
    
function ResetGame(){ 
  document.getElementById('playerScore').innerHTML = 0;
  document.getElementById('computerScore').innerHTML = 0;
}

function LimitGameToBestOutOfThree (playerScore, computerScore) {    
    if (playerScore > computerScore) {
      alert("Player has won the game!");
    } else if (computerScore > playerScore) {
      alert("Computer has won the game!");
    } else {
      alert("It's a tie!");
    }
}

function CompleteRound() {
    let playerScore = parseInt(document.getElementById("playerScore").innerText);
    let computerScore = parseInt(document.getElementById("computerScore").innerText);

    if ((playerScore + computerScore) === 4){
        LimitGameToBestOutOfThree(playerScore, computerScore) ;
        ResetGame() ;
    }
}
