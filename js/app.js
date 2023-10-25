'use strict';

window.onload = function() {
  let userName = prompt('Hi there! What\'s your name?');
  let greeting = document.getElementById('greeting');
  greeting.innerHTML = `Hello, <span id="userNameColor">${userName}</span>! I'm glad you're here. Let's play a game to get to know me better!`;

  let questions = [
    { q: 'Was I born in Silicon Valley?', a: 'NO' },
    { q: 'Did I study at UC Davis?', a: 'YES' },
    { q: 'Have I ever served in the military?', a: 'YES' },
    { q: 'Is my goal to become a famous singer?', a: 'NO' },
    { q: 'Do I want to move my family to Spain?', a: 'YES' }
  ];

  let correctAnswers = 0;

  for (let i = 0; i < questions.length; i++) {
    let answer = prompt(questions[i].q + ' (yes/no)').toUpperCase();
    
    if (answer === 'Y' || answer === 'YES' || answer === 'N' || answer === 'NO') {
      if (answer === questions[i].a || answer[0] === questions[i].a[0]) {
        correctAnswers++;
        alert('Correct!');
      } else {
        alert('Wrong!');
      }
    } else {
      alert('I don\'t think so! I accept only y/n or yes/no.');
    }
  }

  let secretNumber = 8;
  let attemptsForSixth = 4;
  let userGuessedCorrectly = false;

  for (let i = 0; i < attemptsForSixth; i++) {
    let userGuess = parseInt(prompt('Guess a number between 1 and 10:'));
    
    if (userGuess === secretNumber) {
      alert('Congratulations! You guessed the correct number.');
      userGuessedCorrectly = true;
      correctAnswers++;
      break;
    } else if (userGuess < secretNumber) {
      alert('Too low! Try again.');
    } else if (userGuess > secretNumber) {
      alert('Too high! Try again.');
    }
  }

  if (!userGuessedCorrectly) {
    alert(`Sorry, you've used all your attempts. The correct number was ${secretNumber}.`);
  }

  let possibleAnswers = ["THAILAND", "CANADA", "MEXICO", "SPAIN", "JAPAN", "FRANCE", "GERMANY", "ENGLAND", "SCOTLAND", "IRELAND", "FIJI", "ITALY", "PORTUGAL", "BELGIUM" ];
  let attemptsForSeventh = 6;
  let hasGuessedCorrectly = false;

  for (let i = 0; i < attemptsForSeventh; i++) {
    let userGuess = prompt("Which countries have I visited?").toUpperCase();
    
    let found = false;
    for (let j = 0; j < possibleAnswers.length; j++) {
      if (userGuess === possibleAnswers[j]) {
        found = true;
        break;
      }
    }

    if (found) {
      alert("Correct! I have visited " + userGuess + ".");
      correctAnswers++;
      hasGuessedCorrectly = true;
      break;
    } else {
      alert("Wrong guess. Try again!");
    }
  }

  if (!hasGuessedCorrectly) {
    let countriesString = '';
    for (let i = 0; i < possibleAnswers.length; i++) {
      countriesString += possibleAnswers[i];
      if (i !== possibleAnswers.length - 1) {
        countriesString += ', ';
      }
    }
    alert(`Sorry, you've used all your attempts. The countries I've visited are: ${countriesString}.`);
  }

  alert(`Thanks for playing, ${userName}! You got ${correctAnswers} out of 7 questions right. That's ${((correctAnswers / 7) * 100).toFixed(2)}% correct!`);
};


