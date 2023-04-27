#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import readlineSync from 'readline-sync';
import getUserName from './cli.js';

let nameUser = '';
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  nameUser = getUserName();
  console.log(`Hello, ${nameUser}!`);
};

const showMessageOfCorrect = () => console.log('Correct!');
const showMEssageOfIncorrect = (wrong, correct) => {
  const message = `"${wrong}" is wrong answer ;(. Correct answer was "${correct}".\nLet's try again, ${nameUser}!`;
  console.log(message);
};
const showSuccessMessage = () => console.log(`Congratulations, ${nameUser}!`);

const question = (expression) => {
  console.log(`Question: ${expression}`);
};

const getFormattedAnswer = (userAnswer) => userAnswer.trim().toLowerCase();

// В качестве параметров передаются без вызова две функции - генерация выражения
// и расчет правильного ответа. Сам их вызов осуществляется уже внутри
const brainGames = (generateExpression, calculateAnswer) => {
  let currentRound = 1;
  const numberOfRounds = 3;
  while (currentRound <= numberOfRounds) {
    const expression = generateExpression();
    question(expression);
    const userAnswer = readlineSync.question('Your answer: ');
    const formatedAnswer = getFormattedAnswer(userAnswer);
    const correctAnswer = calculateAnswer(expression);

    if (formatedAnswer === correctAnswer) {
      showMessageOfCorrect();
      currentRound += 1;
    } else {
      showMEssageOfIncorrect(userAnswer, correctAnswer);
      break;
    }
  }

  if (currentRound > numberOfRounds) {
    showSuccessMessage();
  }
};

export {
  greetings, brainGames,
};
