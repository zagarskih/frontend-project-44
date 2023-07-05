import readlineSync from 'readline-sync';

const playGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');

  const max = 20;
  const allOperators = '+-*';

  const getRandomNumber = () => Math.floor(Math.random() * max);
  const getIndex = () => Math.floor(Math.random() * allOperators.length);

  let i = 0;

  while (i < 3) {
    const firstNumber = getRandomNumber();
    const secondNumber = getRandomNumber();
    const index = getIndex();
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
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
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
