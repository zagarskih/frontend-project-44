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

  const getAnswer = (num1, num2, symbol) => {
    switch (symbol) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        throw new Error(`Wrong operator ${symbol}`);
    }
  };

  const rightAnswer = getAnswer(firstNumber, secondNumber, operator);

  const question = `${firstNumber} ${operator} ${secondNumber}`;

  return [question, String(rightAnswer)];
};

const startCalcGame = () => startGame(task, getGameData);

export default startCalcGame;
