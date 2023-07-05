import getUserName, { getRandomNumber, getAnswer } from '../src/index.js';

const playGame = () => {
  const userName = getUserName();

  console.log('Find the greatest common divisor of given numbers.');

  const max = 50;
  let i = 0;

  while (i < 3) {
    const firstNumber = getRandomNumber(max);
    const secondNumber = getRandomNumber(max);
    let correctAnswer = 1;

    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = Number(getAnswer());

    for (let num = 1; num <= firstNumber; num += 1) {
      if (firstNumber % num === 0 && secondNumber % num === 0) {
        correctAnswer = num > correctAnswer ? num : correctAnswer;
      }
    }

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      i = 3;
    }
    i += 1;
    if (i === 3) console.log(`Congratulations, ${userName}!`);
  }
};

export default playGame;
