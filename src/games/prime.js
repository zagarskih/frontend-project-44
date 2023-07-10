import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const max = 50;
  const min = 3;
  const questionNumber = getRandomNumber(max, min);
  const question = questionNumber;

  const getRightAnswer = () => {
    for (let i = 2; i < questionNumber; i += 1) {
      if (questionNumber % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const rightAnswer = getRightAnswer();

  const checkAnswer = (a) => a === rightAnswer;

  return [question, checkAnswer, rightAnswer];
};

const startPrimeGame = () => startGame(task, getGameData);

export default startPrimeGame;
