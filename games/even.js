import startGame, { getRandomNumber } from '../src/index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const max = 100;
  const question = getRandomNumber(max);
  const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startEvenGame = () => startGame(task, getGameData);

export default startEvenGame;
