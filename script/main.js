function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function getComputerChoice() {
    const choix = getRandomInt(3)
    switch(choix) {
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors"
    }
}

function getHumanChoice() {
    return prompt()
}


function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        const human = humanChoice.toLowerCase()

        if(human == computerChoice) {
            console.log("Equality ! You both chose : " + human)
        }
        else if(human == "rock" && computerChoice == "scissors") {
            console.log("Win ! " + human + " beats " + computerChoice)
            humanScore++
        }
        else if(human == "paper" && computerChoice == "rock") {
            console.log("Win ! " + human + " beats " + computerChoice)
            humanScore++
        }    
        else if(human == "scissors" && computerChoice == "paper") {
            console.log("Win ! " + human + " beats " + computerChoice)
            humanScore++
        }

        else if(human == "paper" && computerChoice == "scissors") {
            console.log("You lose ! " + computerChoice + " beats " + human)
            computerScore++
        }
        else if(human == "rock" && computerChoice == "paper") {
            console.log("You lose ! " + computerChoice + " beats " + human)
            computerScore++
        }
        else {
            console.log("You lose ! " + computerChoice + " beats " + human)
            computerScore++
        }
    }
    for(let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice())
    }
}

playGame()