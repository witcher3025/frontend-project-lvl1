#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import { greetings, showRulesOfGame, brainGames } from '../index.js';

const nameOfGame = 'brain-gcd\n';
const message = 'Find the greatest common divisor of given numbers.';
const numbersGenerator = () => Math.ceil(Math.random() * 100);

const getCreateExpression = () => {
  const number1 = numbersGenerator();
  const number2 = numbersGenerator();
  const expression = `${number1} ${number2}`;
  return expression;
};

const getCalculateDivider = (expression) => {
  const [numAsStr1, numAsStr2] = expression.split(' ');
  const number1 = Number(numAsStr1);
  const number2 = Number(numAsStr2);

  const minNumber = Math.min(number1, number2);
  const maxNumber = Math.max(number1, number2);

  let divider = 1;
  for (let i = 1; i <= minNumber; i += 1) {
    if ((minNumber % i === 0) && (maxNumber % i === 0)) {
      divider = i;
    }
  }

  return `${divider}`;
};

const brainGcd = () => {
  greetings(nameOfGame);
  showRulesOfGame(message);
  // Передаем в качестве параметров две функции: генерация выражения и вычисление
  // правильного ответа без их вызова. Сам вызов функций будет происходить уже внутри
  brainGames(getCreateExpression, getCalculateDivider);
};

export default brainGcd;
