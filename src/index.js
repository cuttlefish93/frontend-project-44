import readlineSync from 'readline-sync';

const STEPS = 3;

function greetAndGetName() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  return name;
}

function generateRandomNum(difficultyNum) {
  return Math.ceil(Math.random() * difficultyNum);
}

function isAnswerCorrect(answer, correctAnswer) {
  return answer === correctAnswer;
}

function wrongAnswerMessage(answer, correctAnswer, name) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
}

function correctAnswerMessage() {
  console.log('Correct!');
}

function winMessage(name) {
  console.log(`Congratulations, ${name}!`);
}

function gameStep(question) {
  const questionMessage = 'Question:';
  console.log(`${questionMessage} ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
}

export {
  generateRandomNum, isAnswerCorrect, wrongAnswerMessage, correctAnswerMessage, winMessage,
};

export { STEPS, gameStep, greetAndGetName };
