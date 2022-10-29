// Generate a random integer between specified min and max. Inclusive
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// Generate a computer choice based on rock, paper or scissors
function getComputerChoice() {
    switch(getRndInteger(0, 2)) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
        default:
            return 'ERROR';
    }
}

function playRound(playerSelection, computerSelection) {
    let formattedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    switch(formattedPlayerSelection) {
        case 'Scissors':
            if (computerSelection === 'Rock') {
                return 'You lost!'
            }
    }
}