// Open a prompt window and get a player selection
function getSelection() {
    const selection = window.prompt("What do you play?", "");
    return selection;
}

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    // Get random integer from 0 to 2
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function playResults(playerSelection, computerSelection) {
    const options = ['rock', 'paper', 'scissors'];
    // Standardize strings as we care only about the letters not capitalization
    const computer_lower = computerSelection.toLowerCase();
    const player_lower = playerSelection.toLowerCase();
    const player_index = options.indexOf(player_lower);
    const computer_index = options.indexOf(computer_lower);
    if (player_index == -1) {
        return "Error - check spelling of player selection.";
    }
    const player_choice_pretty = player_lower.charAt(0).toUpperCase() + player_lower.slice(1);
    const computer_choice_pretty = computer_lower.charAt(0).toUpperCase() + computer_lower.slice(1);
    if (player_index === computer_index) {
        console.log("It's a Tie");
        return 0;
        // Cool trick to not make 9 different conditions
    } else if (computer_index === (player_index + 1) % 3) {
        console.log('You Lose! ' + computer_choice_pretty + ' beats ' + player_choice_pretty);
        return -1;
    } else {
        console.log('You win! ' + player_choice_pretty + ' beats ' + computer_choice_pretty);
        return 1;
    }
}

function game() {
    let player_score = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = getSelection();
        computerSelection = computerPlay();
        result = playResults(playerSelection, computerSelection);
        player_score = player_score + result
    }
    if (player_score === 0) {
        console.log('Game ended in a tie');
    } else if (player_score > 0) {
        console.log('Player won!');
    } else {
        console.log('Computer won!');
    }
}