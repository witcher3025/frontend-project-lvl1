#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import { greetings, showRulesOfGame, brainGames } from '../index.js';

const nameOfGame = 'brain-prime\n';
const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const numbersGenerator = () => Math.ceil(Math.random() * 100);
const isPrime = (number) => {
  if (number < 2) {
    return 'no';
  }

  for (let divider = 2; divider <= number / 2; divider += 1) {
    if (number % divider === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const brainPrime = () => {
  greetings(nameOfGame);
  showRulesOfGame(message);
  // Передаем в качестве параметров две функции: генерация числа и вычисление правильного ответа
  // без их вызова. Сам вызов функций будет происходить уже внутри
  brainGames(numbersGenerator, isPrime);
};

export default brainPrime;
