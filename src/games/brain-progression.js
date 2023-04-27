#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import { greetings, brainGames } from '../index.js';

const showRulesOfGame = () => {
  console.log('What number is missing in the progression?');
};

const numbersGenerator = () => Math.ceil(Math.random() * 20);
const progressionGenerator = () => Math.ceil(Math.random() * 10);
const indexGenerator = () => Math.floor(Math.random() * 10);

const getCreateExpression = () => {
  const startNumber = numbersGenerator();
  const count = progressionGenerator();
  const numberOfElements = 10;
  const numbers = [];
  for (let i = startNumber; numbers.length < numberOfElements; i += count) {
    numbers.push(i);
  }

  const symbol = '..';
  const IndexOfHiddenElement = indexGenerator();
  numbers[IndexOfHiddenElement] = symbol;
  const expression = numbers.join(' ');
  return expression;
};

const getCalculateHiddenNumber = (expression) => {
  const numbers = expression.split(' ');
  const lengthColl = numbers.length;

  let hiddenNumber = 0;
  for (let i = 0; i < lengthColl; i += 1) {
    const nextNumber = Number(numbers[i + 1]);
    const prevNumber = Number(numbers[i - 1]);
    if (numbers[i] === '..') {
      const count1 = Number(numbers[i + 2] - nextNumber);
      const count2 = Number(prevNumber - numbers[i - 2]);
      hiddenNumber = count1 ? (nextNumber - count1) : (prevNumber + count2);
      break;
    }
  }

  return `${hiddenNumber}`;
};

const brainProgression = () => {
  console.log('brain-progression\n');
  greetings();
  showRulesOfGame();
  // Передаем в качестве параметров две функции: генерация выражения и вычисление
  // правильного ответа без их вызова. Сам вызов функций будет происходить уже внутри
  brainGames(getCreateExpression, getCalculateHiddenNumber);
};

export default brainProgression;
