let score = JSON.parse(localStorage.getItem('score'));
    
    if (!score) {
        score = {
            wins: 0,
            losses: 0,
            ties: 0,
        };
    } 

    updateResult();
    updateScore();

    function playGame(playerMove) {
        let computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'rock') {
                if (computerMove === 'rock') {
                result = 'Tie.';
            } else if (computerMove === 'paper') {
                result = 'You lose, haha!';
            } else if (computerMove === 'scissors') {
                result = 'You win, damn it!';
            }

        } else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
                result = 'You win, damn it!'; 
            } else if (computerMove === 'paper') {
                result = 'Tie.';
            } else if (computerMove === 'scissors') {
                result = 'You lose, haha!';
            }

        } else if (playerMove === 'scissors') {
            if (computerMove === 'rock') {
                result = 'You lose, haha!'; 
            } else if (computerMove === 'paper') {
                result = 'You win, damn it!'; 
            } else if (computerMove === 'scissors') {
                result = 'Tie.';
            }
        }

        if (result === 'You win, damn it!') {
            score.wins = score.wins + 1;
        } else if (result === 'You lose, haha!') {
            score.losses = score.losses + 1;
        } else if (result === 'Tie.') {
            score.ties = score.ties + 1; 
        }

        localStorage.setItem('score', JSON.stringify(score));

        console.log(`You picked ${playerMove}, Computer picked ${computerMove}, ${result}`);

        updateScore();

        document.querySelector('.js-result')
        .innerHTML = result;

        document.querySelector('.js-moves')
        .innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="icon">
        <img src="images/${computerMove}-emoji.png" class="icon">
        Computer`;

    }

    function updateResult() {
        
    }

    function updateScore() {
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`;
    }    

    function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber > 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
        } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3 ) {
            computerMove = 'paper';
        } else {
            computerMove = 'scissors';
        }

        return computerMove;
    }