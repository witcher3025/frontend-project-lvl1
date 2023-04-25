#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

console.log('brain-calc\n');

let nameUser = '';
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  nameUser = getUserName();
  console.log(`Hello, ${nameUser}!`);
};

greetings();

const showRulesOfGame = () => {
  console.log('What is the result of the expression?');
};

showRulesOfGame();

const numbersGenerator = () => Math.ceil(Math.random() * 100);
const operatorGenerator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * 3);
  return operators[index];
};

const getCreateExpression = () => {
  const number1 = numbersGenerator();
  const number2 = numbersGenerator();
  const operator = operatorGenerator();
  const expression = `${number1} ${operator} ${number2}`;
  return expression;
};

const question = (expression) => {
  console.log(`Question: ${expression}`);
};

const getCalculateExpression = (expression) => {
  const [numAsStr1, operator, numAsStr2] = expression.split(' ');
  const number1 = Number(numAsStr1);
  const number2 = Number(numAsStr2);

  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      break;
  }

  return `${result}`;
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
    const expression = getCreateExpression();
    question(expression);
    const userAnswer = readlineSync.question('Your answer: ');
    const formatedAnswer = getFormattedAnswer(userAnswer);
    const correctAnswer = getCalculateExpression(expression);

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
