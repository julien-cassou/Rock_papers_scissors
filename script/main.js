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

    let rock = document.querySelector("#rock");
    let paper = document.querySelector("#paper");
    let scissors = document.querySelector("#scissors");

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
        check();
        metAJourScore();
        } 
    );

    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
        check();
        metAJourScore();
        }
    );

    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
        check();
        metAJourScore();
        }
    );

    function check() {
        if(humanScore >= 5) {
        let divWinner = document.createElement("div");
        divWinner.classList.add("winner");
        divWinner.innerHTML = "Vous avez gagné !";
        document.querySelector("body").appendChild(divWinner);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        }   

        if(computerScore >= 5) {
            let divWinner = document.createElement("div");
            divWinner.classList.add("winner");
            divWinner.innerHTML = "Vous avez perdu !";
            document.querySelector("body").appendChild(divWinner);
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    }

    let divScore = document.querySelector(".score");
    function metAJourScore() {
        divScore.innerHTML = "Humain : " + humanScore + " Bot : " + computerScore
    }

    let screen = document.querySelector(".screen");

    function playRound(human, computerChoice) {
        if(human == computerChoice) {
            screen.innerHTML = "Equality ! You both chose : " + human;
        }
        else if(human == "rock" && computerChoice == "scissors") {
            screen.innerHTML = "Win ! " + human + " beats " + computerChoice;
            humanScore++;
        }
        else if(human == "paper" && computerChoice == "rock") {
            screen.innerHTML = "Win ! " + human + " beats " + computerChoice;
            humanScore++;
        }    
        else if(human == "scissors" && computerChoice == "paper") {
            screen.innerHTML = "Win ! " + human + " beats " + computerChoice;
            humanScore++;
        }

        else if(human == "paper" && computerChoice == "scissors") {
            screen.innerHTML = "You lose ! " + computerChoice + " beats " + human;
            computerScore++;
        }
        else if(human == "rock" && computerChoice == "paper") {
            screen.innerHTML = "You lose ! " + computerChoice + " beats " + human;
            computerScore++;
        }
        else {
            screen.innerHTML = "You lose ! " + computerChoice + " beats " + human;
            computerScore++;
        }
    }
}

playGame()