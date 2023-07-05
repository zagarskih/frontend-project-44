import readlineSync from 'readline-sync';

const playGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const max = 100;
  const getRandomNumber = () => Math.floor(Math.random() * max);

  let i = 0;

  while (i < 3) {
    const questionNumber = getRandomNumber();
    const correctAnswer = questionNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${questionNumber}`);
    const answer = readlineSync.question('Your answer: ');
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
