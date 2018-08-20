document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded');

  let userScores = 0;
  let computerScores = 0;

  const userScore = document.getElementById("user-score");
  const computerScore = document.getElementById("computer-score");
  const result = document.querySelector(".result > p");
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");
  const newGame = document.getElementById("new-game");

  const getCompChoice = function() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNo = Math.floor(Math.random() * 3);
    return choices[randomNo];
  }

  const win = function(userChoice, computerChoice) {
    userScores++;
    userScore.innerHTML = userScores;
    computerScore.innerHTML = computerScores;
    result.innerHTML = `You chose ${userChoice.toUpperCase()} it beats ${computerChoice.toUpperCase()}!! You win!`;
    document.getElementById(userChoice).classList.add('green-flash');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-flash'), 500);
  }

  const loose = function(userChoice, computerChoice) {
    document.getElementById(userChoice).classList.add('choice');
    computerScores++;
    computerScore.innerHTML = computerScores;
    userScore.innerHTML = userScores;
    result.innerHTML = `Computer chose ${computerChoice.toUpperCase()} it beats ${userChoice.toUpperCase()}. You lost!!!`;
    document.getElementById(userChoice).classList.add('red-flash');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-flash'), 500);
  }

  const draw = function(userChoice, computerChoice) {
    document.getElementById(userChoice).classList.add('choice');
    result.innerHTML = `${userChoice.toUpperCase()} is equal to ${computerChoice.toUpperCase()}. Its a draw!!`
    document.getElementById(userChoice).classList.add('grey-flash');
    setTimeout(() => document.getElementById(userChoice).classList.remove('grey-flash'), 500)
  }

  const gameLogic = function(userChoice, computerChoice) {

    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
          win(userChoice, computerChoice);
    } else if ((userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "rock")) {
          loose(userChoice, computerChoice);
    } else if (userChoice === computerChoice) {
          draw(userChoice, computerChoice);
    };
  }

  const clearScoreBoard = function() {
    userScores = 0;
    computerScores = 0;

    userScore.innerHTML = userScores;
    computerScore.innerHTML = computerScores;
  }

    rock.addEventListener('click', () => gameLogic('rock', getCompChoice()));

    paper.addEventListener('click', () => gameLogic('paper', getCompChoice()));

    scissors.addEventListener('click', () => gameLogic('scissors', getCompChoice()));

    newGame.addEventListener('click', () => clearScoreBoard());

});
