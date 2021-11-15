'use strict';
// console.log(document.querySelector('.message').textContent); //reading
// document.querySelector('.message').textContent = '🎉 Correct Number! ';
// console.log(document.querySelector('.message').textContent); //reading
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//Reset again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there's no input...
  if (!guess) {
    displayMessage('⛔️ No Number');
    document.querySelector('body').style.backgroundColor = '#';
  }
  //when player wins 🎉...
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Answer! ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is  wrong
  } else if (guess != secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low ');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game!!😔');
      document.querySelector('.score').textContent = 0;
    }
  }
});
