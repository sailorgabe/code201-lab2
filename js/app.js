'use strict';

window.onload = function() {
  let userName = prompt('Hi there! What\'s your name?');
  let greeting = document.getElementById('greeting');
  greeting.innerHTML = `Hello, <span id="userNameColor">${userName}</span>! I'm glad you're here. Let's play a game to get to know me better!`;


  window.startGame = function() {
    let questions = [
      { q: 'Was I born in Silicon Valley?', a: 'NO' },
      { q: 'Did I study at UC Davis?', a: 'YES' },
      { q: 'Have I ever served in the military?', a: 'YES' },
      { q: 'Is my goal to become a famous singer?', a: 'NO' },
      { q: 'Do I want to move my family to Spain?', a: 'YES' }
    ];

    let correctAnswers = 0;

    questions.forEach(question => {
      let answer = prompt(question.q + ' (yes/no)').toUpperCase();
      if (['Y', 'YES', 'N', 'NO'].includes(answer)) {
        if (answer === question.a || answer[0] === question.a[0]) {
          correctAnswers++;
          //console.log("Correct!");
          alert('Correct!');
        } else {
          //console.log("Wrong!");
          alert('Wrong!');
        }
      } else {
        alert('I don\'t think so! I accept only y/n or yes/no.');
      }
    });

    alert(`Thanks for playing, ${userName}! You got ${correctAnswers} out of 5 questions right.`);
  };
};
