let options = ["rock", "paper", "scissors"]
let messages = ["It's a win!", "It's a loss!", "It's a tie!", "Something went wrong"]

//Event listener to the buttons
userOptions = [...document.getElementsByClassName("option")];
userOptionsArray = Array.from(userOptions);
console.log(userOptions);
console.log(userOptionsArray)

userOptions.forEach(option => {
    option.addEventListener('click', () => { console.log("clicked", option) }
    
    )
    console.log(option)
});

/**
 *
 *
 * @return {int} The random result from 0 to 2 that corresponds to the choosed option of the computer
 */
function computerPlay() {
  choosed = Math.floor(Math.random() * 3)
  return choosed
}


/**
 * 
 * @param {string} playerSelection 
 * @param {int} computerSelection 
 * @returns {int} Number corresponding to the message in [messages] 
 * @returns {int} Points gained by player
 * @returns {int} Points gained by computer
 */
function playRound(playerSelection, computerSelection) {
    /*playerSelection is turned to a number between 0 and 2, if commputerSelection is the same, it's a tie, if it is the next, it's a lost, and if it is the previous, it's a win :)*/
    //Tie
    if (computerSelection == options.indexOf(playerSelection)) {
        return(2,0,0)
    }
    //Player lost
    else if (computerSelection == (options.indexOf(playerSelection)+1)%3) {
        return(1,0,1)
    }
    //Player wins
    else if (computerSelection == (options.indexOf(playerSelection)-1)%3) {
        return(0,1,0)
    }
    //Invalid 
    else return(3,0,0)
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let index = 0; index < 5; index++) {
        playerSelection = prompt("Your turn").toLowerCase()
        computerSelection = computerPlay()
        message,pPlayer,pComputer=playRound(playerSelection, computerSelection)
        playerScore += pPlayer
        computerScore += pComputer

        if (message >= 2) {
            index--
        }

        console.log(messages[message])
        console.log(playerSelection,options[computerSelection])
}}

