import startGame, { getRandomNumber } from '../src/index.js';

const task = 'What is the result of the expression?';

const getGameData = () => {
  const max = 20;
  const min = 2;
  const allOperators = '+-*';
  const firstNumber = getRandomNumber(max, min);
  const secondNumber = getRandomNumber(max, min);
  const index = getRandomNumber(allOperators.length - 1);
  const operator = allOperators[index];
  let rightAnswer = 0;

  if (operator === '+') {
    rightAnswer += firstNumber + secondNumber;
  } else if (operator === '-') {
    rightAnswer += firstNumber - secondNumber;
  } else if (operator === '*') {
    rightAnswer += firstNumber * secondNumber;
  }
  const question = `${String(firstNumber)} ${operator} ${String(secondNumber)}`;

  return [question, rightAnswer];
};

const startCalcGame = () => startGame(task, getGameData);

export default startCalcGame;
