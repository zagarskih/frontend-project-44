import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const getGameData = () => {
  const maxFirstNumber = 20;
  const minStep = 2;
  const maxStep = 10;
  const numsCount = 10;

  const step = getRandomNumber(maxStep, minStep);
  const firstNumber = getRandomNumber(maxFirstNumber);
  const indexOfEmpty = getRandomNumber(numsCount);

  const getProgression = (start, progressionStep, progressionLength) => {
    const arrOfNums = [];
    let elemOfProgression = start;
    for (let i = 0; i < progressionLength; i += 1) {
      elemOfProgression += progressionStep;
      arrOfNums.push(elemOfProgression);
    }
    return arrOfNums;
  };

  const progression = getProgression(firstNumber, step, numsCount);
  const rightAnswer = progression[indexOfEmpty];
  progression[indexOfEmpty] = '..';
  const question = `${progression.join(' ')}`;

  const checkAnswer = (a) => a === String(rightAnswer);

  return [question, checkAnswer, rightAnswer];
};

const startProgressionGame = () => startGame(task, getGameData);

export default startProgressionGame;
