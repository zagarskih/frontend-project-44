import startGame, { getRandomNumber } from '../src/index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const max = 50;
  const min = 2;
  const firstNumber = getRandomNumber(max, min);
  const secondNumber = getRandomNumber(max, min);
  const question = `${firstNumber} ${secondNumber}`;
  let rightAnswer = 1;
  for (let num = 1; num <= firstNumber; num += 1) {
    if (firstNumber % num === 0 && secondNumber % num === 0) {
      rightAnswer = num > rightAnswer ? num : rightAnswer;
    }
  }
  return [question, rightAnswer];
};

const startGcdGame = () => startGame(task, getGameData);

export default startGcdGame;
