#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import { greetings, brainEvenCircle } from '../src/index.js';

console.log('brain-calc\n');
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

// Передаем в качестве параметров две функции: генерация выражения и вычисление
// правильного ответа без их вызова. Сам вызов функций будет происходить уже внутри
brainEvenCircle(getCreateExpression, getCalculateExpression);
