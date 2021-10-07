let options = ["rock", "paper", "scissors"]
let messages = ["It's a win!", "It's a loss!", "It's a tie!", "Something went wrong"]
let playerSelection;
let playerScore = 0
let computerScore = 0

//Event listener to the buttons
userOptions = [...document.getElementsByClassName("option")];
DOCscore = document.getElementById("points");
computerCard = document.getElementById("computer-choosed");


userOptions.forEach(option => {
    option.addEventListener('click', () => {
        console.log("clicked", option.id, options.indexOf(option.id))
        chooseOption(option.id);
        game()
        option.classList.add("unclickable")
        setTimeout(() => {
            computerCard.classList.add("white")
            option.classList.remove("unclickable")
            returnCards();
        }, 1000);
    }
    
    )
});

/**
 *Hides the options that were not selected and saves the current selected
 *
 * @param {string} choosed
 */
function chooseOption(choosed) {
    userOptions.forEach(option => {
        if (option.id !== choosed) {
            option.style.display = "none";
        }
        else {
            indexPlayerSelection = options.indexOf(option.id);
            
        }
    })
    
}

function returnCards() {
    userOptions.forEach(option => {
        option.style.display="flex"
    })
}

/**
 *
 *
 * @return {int} The random result from 0 to 2 that corresponds to the choosed option of the computer
 */
function computerPlay() {
    choosed = Math.floor(Math.random() * 3);
    computerCard.classList.remove("white");
    computerCard.src = "./"+options[choosed]+".png";
  return choosed
}


/**
 * 
 * @param {int} playerSelection 
 * @param {int} computerSelection 
 * @returns {int} Number corresponding to the message in [messages] 
 * @returns {int} Points gained by player
 * @returns {int} Points gained by computer
 */
function playRound(playerSelection, computerSelection) {
    /*playerSelection is turned to a number between 0 and 2, if commputerSelection is the same, it's a tie, if it is the next, it's a lost, and if it is the previous, it's a win :)*/
    //Tie
    if (computerSelection == playerSelection) {
        console.log(messages[2]);
        return { messageIndex:2, playerPoint:0, computerPoint:0};
    }
    //Player lost
    else if (computerSelection == (playerSelection + 4) % 3) {

        return {messageIndex:1, playerPoint:0, computerPoint:1};
    }
    //Player wins
    else if (computerSelection == (playerSelection + 2) % 3) {

        return {messageIndex:0, playerPoint:1, computerPoint:0};
    }
    //Invalid 
        
    else {

        return {messageIndex:3, playerPoint:0, computerPoint:0};
    }
}

function game() {

    if (playerScore >= 4) {
        console.log("end, somebody won");
        DOCscore.innerHTML = "<h1>YOU WIN</h1>"
    }
    else if (computerScore >= 4) {
      console.log("end, somebody won")
      DOCscore.innerHTML = "<h1>YOU LOSE</h1>"
    }
    else {
      indexComputerSelection = computerPlay()
      console.log("computer selection: ", indexComputerSelection)
      console.log("player selection:", indexPlayerSelection)
      let gameResult = playRound(indexPlayerSelection, indexComputerSelection)

      playerScore += gameResult.playerPoint
      computerScore += gameResult.computerPoint
      console.log("player: ", playerScore)
      console.log("computer: ", computerScore)
      DOCscore.innerHTML = "<h1>"+playerScore + " - " + computerScore+"</h1>"

      console.log("..", messages[gameResult.messageIndex])
      console.log(gameResult.messageIndex)
      console.log(
        options[indexPlayerSelection],
        options[indexComputerSelection]
      )
    }
}



