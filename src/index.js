import readlineSync from 'readline-sync';

const ROUNDS_COUNT = 3;

const getRandomNumber = (max, min = 0) => Math.floor(min + Math.random() * (max - min));

const startGame = (task, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, rightAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
export { getRandomNumber };
