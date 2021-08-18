let options = ["rock", "paper", "scissors"]

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
 * @returns {string} result of the round
 */
function playRound(playerSelection, computerSelection) {
    /*playerSelection is turned to a number between 0 and 2, if commputerSelection is the same, it's a tie, if it is the next, it's a lost, and if it is the previous, it's a win :)*/
    if (computerSelection == options.indexOf(playerSelection)) {
        return("It's a tie!")
    }
    else if (computerSelection == (options.indexOf(playerSelection)+1)%3) {
        return("You lost!")
    }
    else if (computerSelection == (options.indexOf(playerSelection)-1)%3) {
        return("It's a win!")
    }
    else return("Try again")
}

function game() {
    for (let index = 0; index < 5; index++) {
        playerSelection = prompt("Your turn").toLowerCase()
        computerSelection = computerPlay()
        
        console.log(playRound(playerSelection, computerSelection))
        console.log(playerSelection,options[computerSelection])
}}

