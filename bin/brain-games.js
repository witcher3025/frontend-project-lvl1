#!/usr/bin/env node
import getUserName from '../src/cli.js';

console.log('brain-games\nWelcome to the Brain Games!\n');

const greetings = () => {
  const nameUser = getUserName();
  console.log(`Hello, ${nameUser}!`);
};

greetings();
