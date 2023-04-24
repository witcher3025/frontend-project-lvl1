#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

console.log('brain-even\n');

let nameUser = '';
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  nameUser = getUserName();
  console.log(`Hello, ${nameUser}!`);
};

greetings();

const showRulesOfGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

showRulesOfGame();

const numbersGenerator = () => Math.ceil(Math.random() * 100);
const question = (number) => {
  console.log(`Question: ${number}`);
};

const isEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

const showMessageOfCorrect = () => console.log('Correct!');
const showMEssageOfIncorrect = (wrong, correct) => {
  const message = `"${wrong}" is wrong answer ;(. Correct answer was "${correct}".\nLet's try again, ${nameUser}!`;
  console.log(message);
};
const showSuccessMessage = () => console.log(`Congratulations, ${nameUser}!`);

const getFormattedAnswer = (userAnswer) => userAnswer.trim().toLowerCase();

const brainEvenCircle = () => {
  let count = 1;
  const numberOfCorrectAnswer = 3;
  while (count <= numberOfCorrectAnswer) {
    const number = numbersGenerator();
    question(number);
    const userAnswer = readlineSync.question('Your answer: ');
    const formatedAnswer = getFormattedAnswer(userAnswer);
    const correctAnswer = isEven(number);

    if (formatedAnswer === correctAnswer) {
      showMessageOfCorrect();
      count += 1;
    } else {
      showMEssageOfIncorrect(userAnswer, correctAnswer);
      break;
    }
  }

  if (count > numberOfCorrectAnswer) {
    showSuccessMessage();
  }
};

brainEvenCircle();
