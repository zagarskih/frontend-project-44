import startGame, { getRandomNumber } from '../src/index.js';

const task = 'What number is missing in the progression?';

const getGameData = () => {
  const maxFirstNumber = 20;
  const minStep = 2;
  const maxStep = 10;
  const numsCount = 10;

  const step = getRandomNumber(maxStep, minStep);
  const firstNumber = getRandomNumber(maxFirstNumber);
  const indexOfEmpty = getRandomNumber(numsCount);

  const arrOfNums = [];
  let elemOfProgression = firstNumber;

  for (let i = 0; i < numsCount; i += 1) {
    elemOfProgression += step;
    arrOfNums.push(elemOfProgression);
  }

  const rightAnswer = arrOfNums[indexOfEmpty];
  arrOfNums[indexOfEmpty] = '..';
  const question = `${arrOfNums.join(' ')}`;

  return [question, rightAnswer];
};

const startProgressionGame = () => startGame(task, getGameData);

export default startProgressionGame;
