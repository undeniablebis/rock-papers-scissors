
/**
 * 
 * NEW and IMPROVED 
 * ROCK PAPER SCISSORS
 * 
 * by Bismillah Constantino
 * 
 * 
 */





//Initialize Human and Computer Scores
let humanScore = 0;
let computerScore = 0;


/** Computer choice function  */

/**
 * 
 * This function randomly chooses between 3 choices 
 * then returns it.
 * 
 */

function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];

}

/** Play Round Function */
/*
 * 
 * This function compares the human and computer choices
 * 
 */
function playRound(human, computer) {
    if (human === computer) {
        return "tie"
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "scissors" && computer === "paper") ||
        (human === "paper" && computer === "rock")
    ) {
        return "You win!"
    } else {
        return "Computer wins!"
    }
}

/**
 * 
 * Select all button
 * 
 */

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanChoice = button.id;
        const computerChoice = getComputerChoice();

        const result = playRound(humanChoice, computerChoice);

        if(result == "You win!"){
            humanScore++;
            document.getElementById("humanScore").textContent = humanScore;
            console.log(result);
        }else if (result == "Computer wins!"){
            computerScore++;
            document.getElementById("computerScore").textContent = computerScore;
            console.log(result);
        }else{
            console.log(result);
        }

        if(humanScore == 5){
            alert("You Win!");
            location.reload();
        }else if(computerScore == 5){
            alert("Computer wins!")
            location.reload();
        }
        
    })
})



