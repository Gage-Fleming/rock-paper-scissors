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