import * as game from '../src/index.js';

function isPrimeNum(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function brainPrime(steps) {
  const difficultyIndicator = 500;
  let count = 0;
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  // Greeting
  const name = game.greetAndGetName();

  // Game rules
  console.log(rules);

  // Game
  for (let i = 0; i < steps; i += 1) {
    const num = game.generateRandomNum(difficultyIndicator);
    const isPrime = isPrimeNum(num);
    const correctAnswer = isPrime ? 'yes' : 'no';

    const answer = game.gameStep(num);
    count += 1;

    if (!game.isAnswerCorrect(answer, correctAnswer)) {
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

export default brainPrime;
