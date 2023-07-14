import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const max = 50;
  const min = 2;
  const firstNumber = getRandomNumber(max, min);
  const secondNumber = getRandomNumber(max, min);
  const question = `${firstNumber} ${secondNumber}`;

  const getGcd = (num1, num2) => {
    let gcd = 1;
    for (let i = 1; i <= num1; i += 1) {
      if (num1 % i === 0 && num2 % i === 0) {
        gcd = i > gcd ? i : gcd;
      }
    }
    return gcd;
  };

  const rightAnswer = getGcd(firstNumber, secondNumber);

  return [question, String(rightAnswer)];
};

const startGcdGame = () => startGame(task, getGameData);

export default startGcdGame;
