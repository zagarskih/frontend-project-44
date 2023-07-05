import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default getUserName;
export { getRandomNumber, getAnswer };
