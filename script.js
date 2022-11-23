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
let score = 20;
let highscore = 0;
let guessInput = document.querySelector('.guess').value;

//function declaration and primary function calls
function displayMsg(message) {
  document.querySelector('.message').textContent = message;
}
function displayScore(score) {
  document.querySelector('.score').textContent = score;
}
function randomNum() {
  random = Math.trunc(Math.random() * 20) + 1;
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
//primary function calls
randomNum();
//variable presentation
displayScore(score);
displayHighS(highscore);

//game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
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

    //higher
  } else if (guess !== random) {
    score--;
    if (score > 0) {
      displayMsg(guess > random ? 'High Number !' : 'Low Number');
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
  score = 20;
  //html
  resetInput();
  displayScore(score);
  displayMsg('Start guessing...');
  secretBoxContent('?');
  //style
  bgColor('#222');
  secretBoxWidth('15rem');
});
