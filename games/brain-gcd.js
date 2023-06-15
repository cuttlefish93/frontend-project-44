import * as game from '../src/index.js';

function getGcd(num1, num2) {
  let a = num1;
  let b = num2;

  while (a !== b) {
    if (a > b) {
      a -= b;
    }
    if (b > a) {
      b -= a;
    }
  }

  return a;
}

function brainGcdGame(steps) {
  const difficultyIndicator = 100;
  let count = 0;
  const rules = 'Find the greatest common divisor of given numbers.';

  // Greeting
  const name = game.greetAndGetName();

  // Game rules
  console.log(rules);

  // Game
  for (let i = 0; i < steps; i += 1) {
    const num1 = game.generateRandomNum(difficultyIndicator);
    const num2 = game.generateRandomNum(difficultyIndicator);
    const correctAnswer = getGcd(num1, num2);

    const question = `${num1} ${num2}`;
    const answer = game.gameStep(question);
    count += 1;

    if (!game.isAnswerCorrect(parseInt(answer, 10), parseInt(correctAnswer, 10))) {
      game.wrongAnswerMessage(answer, correctAnswer, name);
      i = steps;
      return;
    }

    game.correctAnswerMessage();

    if (count === steps) {
      game.winMessage(name);
    }
  }
}

export default brainGcdGame;
