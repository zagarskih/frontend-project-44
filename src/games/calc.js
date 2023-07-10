import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const getGameData = () => {
  const max = 20;
  const min = 2;
  const allOperators = '+-*';
  const firstNumber = getRandomNumber(max, min);
  const secondNumber = getRandomNumber(max, min);
  const index = getRandomNumber(allOperators.length - 1);
  const operator = allOperators[index];

  const getRightAnswer = () => {
    switch (operator) {
      case '+':
        return firstNumber + secondNumber;
      case '-':
        return firstNumber - secondNumber;
      case '*':
        return firstNumber * secondNumber;
      default:
        throw new Error('Wrong operator');
    }
  };

  const rightAnswer = getRightAnswer();

  const question = `${String(firstNumber)} ${operator} ${String(secondNumber)}`;

  const checkAnswer = (a) => a === String(rightAnswer);

  return [question, checkAnswer, rightAnswer];
};

const startCalcGame = () => startGame(task, getGameData);

export default startCalcGame;
