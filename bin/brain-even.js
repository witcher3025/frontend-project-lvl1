#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import { greetings, brainEvenCircle } from '../src/index.js';

console.log('brain-even\n');
greetings();

const showRulesOfGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

showRulesOfGame();

const numbersGenerator = () => Math.ceil(Math.random() * 100);
const isEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

// Передаем в качестве параметров две функции: генерация числа и вычисление правильного ответа
// без их вызова. Сам вызов функций будет происходить уже внутри
brainEvenCircle(numbersGenerator, isEven);
