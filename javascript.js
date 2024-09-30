function playGame() {
    const string_options = ['rock', 'paper', 'scissors'];
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * string_options.length);
        return string_options[randomIndex];
    }

    function getHumanChoice() {
        let choice = prompt('Enter your choice (rock, paper, or scissors): ');
        return choice.toLowerCase();
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('It\'s a tie!');
        } else if (humanChoice === 'rock' && computerChoice ==='scissors') {
            console.log('You win!');
            humanScore++;
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            console.log('You win!');
            humanScore++;
        } else if (humanChoice ==='scissors' && computerChoice === 'paper') {
            console.log('You win!');
            humanScore++;
        } else { 
            console.log('You lose!');
            computerScore++;
        } 
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Game over! Human score: ${humanScore}, Computer score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (humanScore < computerScore) {
        console.log('Computer wins the game!');
    } else {
        console.log('It\'s a tie game!');
    }
}

playGame();