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
function heading(heading) {
  document.querySelector('h1').textContent = heading;
}
function audioPlay(audio, volume) {
  document.getElementById(audio).play();
  document.getElementById(audio).volume = volume;
}
//primary function calls
randomNum();
//variable presentation
displayScore(score);
displayHighS(highscore);

//
console.log(random);
//game logic
document.addEventListener('click', function () {
  audioPlay('audio', 0.5);
});
document.querySelector('.check').addEventListener('click', function () {
  audioPlay('button', 1);
  guess = Number(document.querySelector('.guess').value);
  // no input
  if (!guess) {
    displayMsg('🚫 No Number');
    // win
  } else if (guess === random) {
    displayMsg('🎉🥳 Correct Number, SMARTASS');
    heading('You dropped this 👑');
    secretBoxContent(random);
    //---------------bg
    bgColor('#60b347');
    secretBoxWidth('30rem');
    //--------------highscore
    if (score > highscore) {
      highscore = score;
      displayHighS(highscore);
    }
    audioPlay('audio-win', 1);
    //wrong
  } else if (guess !== random) {
    if (score > 0) score--;
    if (score > 0) {
      displayMsg(properMsg());
      displayScore(score);
    } else {
      displayMsg('📛 GAME OVER');
      heading('L0SER HAHA 🤣 L00K AT YOU 🤣 CANT EVEN GUESS A NUMBER');
      displayScore(score);
      audioPlay('audio-lose', 1);
    }
  }
});

// AGAIN LOGIC

document.querySelector('.again').addEventListener('click', function () {
  audioPlay('button', 0.5);
  //variables
  randomNum();
  score = 6;
  //html
  resetInput();
  displayScore(score);
  displayMsg('Start guessing...');
  heading('GUESS MY NUMBER!');
  secretBoxContent('?');
  //style
  bgColor('#222');
  secretBoxWidth('15rem');
});
