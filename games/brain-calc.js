import * as game from '../src/index.js';

function getResult(char, num1, num2) {
  let result;

  if (char === '+') result = num1 + num2;
  if (char === '-') result = num1 - num2;
  if (char === '*') result = num1 * num2;

  return result;
}

function brainCalcGame(steps) {
  const difficultyIndicator = 50;
  let count = 0;
  const rules = 'What is the result of the expression?';
  const operators = ['+', '-', '*'];

  // Greeting
  const name = game.greetAndGetName();

  // Game rules
  console.log(rules);

  // Game
  for (let i = 0; i < steps; i += 1) {
    const num1 = game.generateRandomNum(difficultyIndicator);
    const num2 = game.generateRandomNum(difficultyIndicator);
    const operatorIndex = game.generateRandomNum(operators.length) - 1;
    const correctAnswer = getResult(operators[operatorIndex], num1, num2);

    const question = `${num1} ${operators[operatorIndex]} ${num2}`;
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

export default brainCalcGame;
