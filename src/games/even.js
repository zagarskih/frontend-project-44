import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const getGameData = () => {
  const max = 100;
  const question = getRandomNumber(max);

  const getRightAnswer = () => {
    if (question % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const rightAnswer = getRightAnswer();

  const checkAnswer = (a) => a === rightAnswer;

  return [question, checkAnswer, rightAnswer];
};

const startEvenGame = () => startGame(task, getGameData);

export default startEvenGame;
