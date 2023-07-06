import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandomNumber = (max, min = 0) => Math.floor(min + Math.random() * (max + 1 - min));

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export default getUserName;
export { getRandomNumber, getAnswer };
