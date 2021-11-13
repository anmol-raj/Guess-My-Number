'use strict';
// console.log(document.querySelector('.message').textContent); //reading
// document.querySelector('.message').textContent = '🎉 Correct Number! ';
// console.log(document.querySelector('.message').textContent); //reading
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.again').addEventListener('click', function () {});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there's no input...
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number';
    document.querySelector('body').style.backgroundColor = '#';
  }
  //when player wins 🎉...
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Answer! ';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  //when guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game!!😔';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is too low
  else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too Low ';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
