import * as game from '../src/index.js';

function isNumEven(num) {
  return !(num % 2);
}

function brainEvenGame(steps) {
  const difficultyIndicator = 100;
  let count = 0;
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  // Greeting
  const name = game.greetAndGetName();

  // Game rules
  console.log(rules);

  // Game
  for (let i = 0; i < steps; i += 1) {
    const num = game.generateRandomNum(difficultyIndicator);
    const isEven = isNumEven(num);
    const correctAnswer = isEven ? 'yes' : 'no';

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

export default brainEvenGame;
