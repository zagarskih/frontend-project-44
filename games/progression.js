import getUserName, { getRandomNumber, getAnswer } from '../src/index.js';

const playGame = () => {
  const userName = getUserName();

  console.log('What number is missing in the progression?');

  const maxFirstNumber = 20;
  const minStep = 2;
  const maxStep = 10;
  const numsCount = 10;
  let i = 0;

  while (i < 3) {
    const step = getRandomNumber(maxStep, minStep);
    const firstNumber = getRandomNumber(maxFirstNumber);
    const indexOfEmpty = getRandomNumber(numsCount);

    const arrOfNums = [];
    let elemOfProgression = firstNumber;

    for (let j = 0; j < numsCount; j += 1) {
      elemOfProgression += step;
      arrOfNums.push(elemOfProgression);
    }

    const correctAnswer = arrOfNums[indexOfEmpty];
    arrOfNums[indexOfEmpty] = '..';

    console.log(`Question: ${arrOfNums.join(' ')}`);
    const answer = Number(getAnswer());

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
