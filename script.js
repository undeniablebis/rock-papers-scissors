/**
 * 
 * 
 * ROCK PAPER SCISSORS
 * 
 * 
 * 
 */



//Initialize
let computerScore = 0;
let humanScore = 0;


console.log("Hello world");


let game = true;
// while (game) {
    // let num = prompt("Enter how many rounds you want to play >> ");
    // let rounds = parseInt(num);

    // for (let i = 0; i < rounds; i++) {
        // const humanChoice = prompt(`Round ${i + 1}: Enter rock, paper, or scissors >> `);
        const humanChoice = prompt(`Enter rock, paper, or scissors >> `);
        const computerChoice = getComputerChoice();

        const result = playRound(humanChoice, computerChoice);

        console.log(`You chose ${humanChoice}`);
        console.log(`Computer Chose ${computerChoice}`);

        if (result === "You win!") {
            humanScore++;
            console.log(`You win! Scores:\nYou: ${humanScore} Computer: ${computerScore}`);
        } else if (result === "Computer wins!") {
            computerScore++;
            console.log(`You lose! Scores:\nYou: ${humanScore} Computer: ${computerScore}`);
        } else {
            console.log(`It's a tie! Scores:\nYou: ${humanScore} Computer: ${computerScore}`)
        }

    // }

    let finalResult;

    if (humanScore > computerScore) {
        finalResult = "You are the overall winner!";
    } else if (computerScore > humanScore) {
        finalResult = "Computer is the overall winner!";
    } else {
        finalResult = "It's a tie!"
    }

    console.log(finalResult);
    alert(finalResult);

    // let response = prompt("Do you want to play again? Y/n").toLowerCase();
    // if (response !== "y") {
    //     game = false;
    // }

// }

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
// Create a function that will get computer choice
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}