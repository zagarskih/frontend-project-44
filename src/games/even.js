import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const max = 100;
  const question = getRandomNumber(max);

  const isEven = (number) => number % 2 === 0;
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const startEvenGame = () => startGame(task, getGameData);

export default startEvenGame;
