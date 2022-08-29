/* eslint-disable no-console, import/extensions */

import readlineSync from 'readline-sync';

const getUserName = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  return nameUser;
};

export default getUserName;
