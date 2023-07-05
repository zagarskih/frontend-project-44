import getUserName, { getRandomNumber, getAnswer } from '../src/index.js';

const playGame = () => {
  const userName = getUserName();

  console.log('What is the result of the expression?');

  const max = 20;
  const allOperators = '+-*';

  let i = 0;

  while (i < 3) {
    const firstNumber = getRandomNumber(max);
    const secondNumber = getRandomNumber(max);
    const index = getRandomNumber(allOperators.length);
    const operator = allOperators[index];
    let correctAnswer = 0;

    if (operator === '+') {
      correctAnswer += firstNumber + secondNumber;
    } else if (operator === '-') {
      correctAnswer += firstNumber - secondNumber;
    } else {
      correctAnswer += firstNumber * secondNumber;
    }

    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const answer = Number(getAnswer());

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    i += 1;
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
