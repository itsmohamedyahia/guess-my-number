'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 0;
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//variable declaration
let random;
let score = 6;
let highscore = 0;
let guess;

//function declaration and primary function calls
function displayMsg(message) {
  document.querySelector('.message').textContent = message;
}
function displayScore(score) {
  document.querySelector('.score').textContent = score;
}
function randomNum() {
  random = Math.trunc(Math.random() * 50) + 1;
}
function displayScore(score) {
  document.querySelector('.score').textContent = score;
}
function displayHighS(highscore) {
  document.querySelector('.highscore').textContent = highscore;
}
function bgColor(color) {
  document.querySelector('body').style.backgroundColor = color;
}
function secretBoxWidth(width) {
  document.querySelector('.number').style.width = width;
}
function secretBoxContent(content) {
  document.querySelector('.number').textContent = content;
}
function resetInput() {
  document.querySelector('.guess').value = '';
}
function properMsg() {
  const high = 'High number';
  const low = 'Low number';
  const diff = Math.abs(guess - random);
  switch (true) {
    case diff >= 25:
      return guess > random ? `⏫ Really ${high} ` : `⏬ Really ${low} `;
    case diff >= 10:
      return guess > random ? `🔼 ${high}` : `🔽 ${low}`;
    case diff >= 5:
      return guess > random
        ? `💧 Close but still a ${high} 🔼`
        : `💧 Close but still ${low} 🔽`;
    default:
      return guess > random
        ? `🔥 Really close but still a ${high} 🔼`
        : `🔥 Really close but still a ${low} 🔽`;
  }
}
//primary function calls
randomNum();
//variable presentation
displayScore(score);
displayHighS(highscore);

//
console.log(random);
//game logic
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  // no input
  if (!guess) {
    displayMsg('🚫 No Number');
    // win
  } else if (guess === random) {
    displayMsg('🎉 Correct Number');
    secretBoxContent(random);
    //---------------bg
    bgColor('#60b347');
    secretBoxWidth('30rem');
    //--------------highscore
    if (score > highscore) {
      highscore = score;
      displayHighS(highscore);
    }

    //wrong
  } else if (guess !== random) {
    score--;
    if (score > 0) {
      displayMsg(properMsg());
      displayScore(score);
    } else {
      displayMsg('YOu lost the game');
      displayScore(score);
    }
  }
});

// AGAIN LOGIC

document.querySelector('.again').addEventListener('click', function () {
  //variables
  randomNum();
  score = 6;
  //html
  resetInput();
  displayScore(score);
  displayMsg('Start guessing...');
  secretBoxContent('?');
  //style
  bgColor('#222');
  secretBoxWidth('15rem');
});
