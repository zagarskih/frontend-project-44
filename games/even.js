import getUserName, { getRandomNumber, getAnswer } from '../src/index.js';

const playGame = () => {
  const userName = getUserName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const max = 100;
  let i = 0;

  while (i < 3) {
    const questionNumber = getRandomNumber(max);
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${questionNumber}`);
    const answer = getAnswer();

    if (correctAnswer === answer) {
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
