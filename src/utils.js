const getRandomNumber = (max, min = 0) => Math.floor(min + Math.random() * (max - min));

export default getRandomNumber;
