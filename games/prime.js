import startGame, { getRandomNumber } from '../src/index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const max = 50;
  const min = 3;
  const questionNumber = getRandomNumber(max, min);
  const question = questionNumber;
  let rightAnswer = '';
  for (let i = 2; i < questionNumber; i += 1) {
    if (questionNumber % i === 0) {
      rightAnswer = 'no';
      break;
    }
    rightAnswer = 'yes';
  }
  return [question, rightAnswer];
};

const startPrimeGame = () => startGame(task, getGameData);

export default startPrimeGame;
