// Open a prompt window and get a player selection
const currentGame = document.querySelector('.current');
const wins = document.querySelector('.wins');
const loses = document.querySelector('.loses');
const gameResults = document.querySelector('.gameResults');

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', singleGame));

function startResults() {
    playerScore = 0;
    gamesPlayed = 0;
    winsInt = 0;
    losesInt = 0;
    gameResults.textContent = '';
}

startResults();

function singleGame(e) {
    if (gamesPlayed === 5) {
        startResults();
    }
    const computerSelection = computerPlay();
    const playerSelection = this.getAttribute('id');
    const roundResult = playResults(playerSelection, computerSelection);
    update(roundResult);
}

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    // Get random integer from 0 to 2
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function playResults(playerSelection, computerSelection) {
    const options = ['rock', 'paper', 'scissors'];
    const player_index = options.indexOf(playerSelection);
    const computer_index = options.indexOf(computerSelection);

    const player_choice_pretty = playerSelection.charAt(0).toUpperCase() +
        playerSelection.slice(1);
    const computer_choice_pretty = computerSelection.charAt(0).toUpperCase() +
        computerSelection.slice(1);

    if (player_index === computer_index) {
        currentGame.textContent = "It's a tie";
        return 0;
        // Cool trick to not make 9 different conditions
    } else if (computer_index === (player_index + 1) % 3) {
        currentGame.textContent = 'You Lose! ' + computer_choice_pretty + ' beats ' +
            player_choice_pretty;
        return -1;
    } else {
        currentGame.textContent = 'You win! ' + player_choice_pretty + ' beats ' +
            computer_choice_pretty;
        return 1;
    }
}

function update(roundResult) {
    if (roundResult == 1) winsInt++;
    if (roundResult == -1) losesInt++;
    updateResults(winsInt, losesInt);
    playerScore = playerScore + roundResult;
    gamesPlayed++;
    if (gamesPlayed === 5) {
        if (playerScore === 0) {
            gameResults.textContent = 'Game ended in a tie';
        } else if (playerScore > 0) {
            gameResults.textContent = 'Player won!';
        } else {
            gameResults.textContent = 'Comupter won!';
        }
    }
}

function updateResults(winsInt, losesInt) {
    wins.textContent = winsInt;
    loses.textContent = losesInt;
}