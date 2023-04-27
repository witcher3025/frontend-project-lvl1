#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import { greetings, showRulesOfGame, brainGames } from '../index.js';

const nameOfGame = 'brain-calc\n';
const message = 'What is the result of the expression?';

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

const brainCalc = () => {
  greetings(nameOfGame);
  showRulesOfGame(message);
  brainGames(getCreateExpression, getCalculateExpression);
};

export default brainCalc;
