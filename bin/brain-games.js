#!/usr/bin/env node

/* eslint-disable no-console, import/extensions */

import getUserName from '../src/cli.js';

console.log('brain-games');

const greetings = () => {
  console.log('\nWelcome to the Brain Games!');
  const nameUser = getUserName();
  console.log(`Hello, ${nameUser}!\n`);
};

greetings();
