#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import { greetings, brainGames } from '../index.js';

const brainProgression = () => {
  console.log('brain-progression\n');
  greetings();

  const showRulesOfGame = () => {
    console.log('What number is missing in the progression?');
  };

  showRulesOfGame();

  const numbersGenerator = () => Math.ceil(Math.random() * 20);
  const progressionGenerator = () => Math.ceil(Math.random() * 10);
  const indexGenerator = () => Math.floor(Math.random() * 10);

  const getCreateExpression = () => {
    const startNumber = numbersGenerator();
    const progressionCount = progressionGenerator();

    const numbers = [];
    for (let i = startNumber; numbers.length <= 10; i += progressionCount) {
      numbers.push(i);
    }

    const symbol = '..';
    const IndexOfHiddenElement = indexGenerator();
    numbers[IndexOfHiddenElement] = symbol;
    const expression = numbers.join(' ');
    return expression;
  };

  const getCalculateHiddenElement = (expression) => {
    const numbers = expression.split(' ');
    const lengthColl = numbers.length;

    let hiddenElement = 0;
    let progressionCount = 0;
    for (let i = 0; i < lengthColl; i += 1) {
      const currentNumber = numbers[i];
      const nextNumber = numbers[i + 1];
      const prevNumber = numbers[i - 1];
      if (currentNumber === '..') {
        switch (i) {
          case 0:
            progressionCount = +numbers[i + 2] - +nextNumber;
            hiddenElement = +nextNumber - progressionCount;
            break;
          case lengthColl - 1:
            progressionCount = +prevNumber - +numbers[i - 2];
            hiddenElement = +prevNumber + progressionCount;
            break;
          default:
            progressionCount = (+nextNumber - +prevNumber) / 2;
            hiddenElement = +prevNumber + progressionCount;
            break;
        }

        break;
      }
    }

    return `${hiddenElement}`;
  };

  // Передаем в качестве параметров две функции: генерация выражения и вычисление
  // правильного ответа без их вызова. Сам вызов функций будет происходить уже внутри
  brainGames(getCreateExpression, getCalculateHiddenElement);
};

export default brainProgression;
