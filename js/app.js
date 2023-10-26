'use strict';

window.onload = function() {
  const userName = prompt('Hi there! What\'s your name?');
  const greeting = document.getElementById('greeting');
  greeting.innerHTML = `Hello, <span id="userNameColor">${userName}</span>! I'm glad you're here. Let's play a game to get to know me better.`;

  let correctAnswers = 0;

  function askYesNoQuestion(question, correctAnswer) {
    const answer = prompt(question + ' (yes/no)').toUpperCase();
    if (answer === correctAnswer) {
      correctAnswers++;
      alert('Correct!');
    } else if (answer === 'Y' || answer === 'N' || answer === 'YES' || answer === 'NO') {
      alert('Wrong!');
    } else {
      alert('I don\'t think so! I accept only y/n or yes/no.');
    }
  }

  const questions = [
    'Was I born in Silicon Valley?',
    'Did I study at UC Davis?',
    'Have I ever served in the military?',
    'Is my goal to become a famous singer?',
    'Do I want to move my family to Spain?'
  ];
  const answers = ['NO', 'YES', 'YES', 'NO', 'YES'];

  questions.forEach((question, index) => {
    askYesNoQuestion(question, answers[index]);
  });

  const secretNumber = 8;
  const attemptsForSixth = 4;

  function guessNumber(secretNumber, maxAttempts) {
    for (let i = 0; i < maxAttempts; i++) {
      const userGuess = parseInt(prompt('Guess a number between 1 and 10:'));
      if (userGuess === secretNumber) {
        correctAnswers++;
        alert('Congratulations! You guessed the correct number.');
        return;
      } else if (userGuess < secretNumber) {
        alert('Too low! Try again.');
      } else {
        alert('Too high! Try again.');
      }
    }
    alert(`Sorry, you've used all your attempts. The correct number was ${secretNumber}.`);
  }

  guessNumber(secretNumber, attemptsForSixth);

  const possibleAnswers = ["THAILAND", "CANADA", "MEXICO", "SPAIN", "JAPAN", "FRANCE", "GERMANY", "ENGLAND", "SCOTLAND", "IRELAND", "FIJI", "ITALY", "PORTUGAL", "BELGIUM"];
  const attemptsForSeventh = 6;

  function guessCountry(possibleAnswers, maxAttempts) {
    for (let i = 0; i < maxAttempts; i++) {
      const userGuess = prompt("Which countries have I visited?").toUpperCase();
      if (possibleAnswers.includes(userGuess)) {
        correctAnswers++;
        alert("Correct! I have visited " + userGuess + ".");
        return;
      } else {
        alert("Wrong guess. Try again!");
      }
    }
    const countriesString = possibleAnswers.join(', ');
    alert(`Sorry, you've used all your attempts. The countries I've visited are: ${countriesString}.`);
  }

  guessCountry(possibleAnswers, attemptsForSeventh);

  alert(`Thanks for playing, ${userName}! You got ${correctAnswers} out of 7 questions right. That's ${((correctAnswers / 7) * 100).toFixed(2)}% correct!`);
};





