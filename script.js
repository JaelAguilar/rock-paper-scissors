let options = ["rock", "paper", "scissors"]

function computerPlay() {
  choosed = Math.floor(Math.random() * 3)
  return choosed
}

function getResult(playerSelection, computerSelection) {
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



for (let index = 0; index < 5; index++) {
    playerSelection = prompt("Your turn").toLowerCase()
    computerSelection = computerPlay()
    console.log(getResult(playerSelection, computerSelection))
    console.log(playerSelection,options[computerSelection])
}