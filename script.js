function computerPlay() {
    options=["Rock","Paper", "Scissors"]
    choosed = Math.floor(Math.random() * 3)
    return options[choosed]
}

console.log(computerPlay())