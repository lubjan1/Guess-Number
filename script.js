'use strict';

//////////////////////////////////////////////////////////////

let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = (document.querySelector('.score').textContent = 20);
let highscore = 0;

document.querySelector('.score').textContent = score;
let displayNumber = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayNumber('⛔️ No number!');
    ////////////////////////
  } else if (guess === Secretnumber) {
    displayNumber('🎉 Correct Number!');

    document.querySelector('.number').textContent = Secretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== Secretnumber)
    if (score > 0) {
      displayNumber(guess > Secretnumber ? 'To high' : 'To low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayNumber('GAME OVER');
    }

  console.log(Secretnumber);
});

document.querySelector('.again').addEventListener('click', function () {
  let score = 0;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').style.width = '15rem';
});
