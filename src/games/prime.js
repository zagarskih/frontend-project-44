import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const max = 50;
  const min = 3;
  const questionNumber = getRandomNumber(max, min);
  const question = questionNumber;

  const isPrime = (number) => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const startPrimeGame = () => startGame(task, getGameData);

export default startPrimeGame;
