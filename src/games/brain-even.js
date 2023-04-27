#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import { greetings, showRulesOfGame, brainGames } from '../index.js';

const nameOfGame = 'brain-even\n';
const message = 'Answer "yes" if the number is even, otherwise answer "no".';
const numbersGenerator = () => Math.ceil(Math.random() * 100);

const isEven = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

const brainEven = () => {
  greetings(nameOfGame);
  showRulesOfGame(message);
  // Передаем в качестве параметров две функции: генерация числа и вычисление правильного ответа
  // без их вызова. Сам вызов функций будет происходить уже внутри
  brainGames(numbersGenerator, isEven);
};

export default brainEven;
