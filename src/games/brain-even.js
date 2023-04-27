#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import { greetings, brainGames } from '../index.js';

const showRulesOfGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const numbersGenerator = () => Math.ceil(Math.random() * 100);
const isEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

const brainEven = () => {
  console.log('brain-even\n');
  greetings();
  showRulesOfGame();
  // Передаем в качестве параметров две функции: генерация числа и вычисление правильного ответа
  // без их вызова. Сам вызов функций будет происходить уже внутри
  brainGames(numbersGenerator, isEven);
};

export default brainEven;
