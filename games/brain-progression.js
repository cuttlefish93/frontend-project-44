import * as game from '../src/index.js';

function generateProgression(beginNum, progressionLength, progressionStep) {
  const progressionColl = [];
  let num = beginNum;

  progressionColl.push(beginNum);

  for (let j = 1; j < progressionLength; j += 1) {
    num += progressionStep;
    progressionColl.push(num);
  }

  return progressionColl;
}

function brainProgression(steps) {
  const difficultyIndicator = 50;
  let count = 0;
  const rules = 'What number is missing in the progression?';

  const progressionLength = 10;
  const progressionStepMax = 20;

  // Greeting
  const name = game.greetAndGetName();

  // Game rules
  console.log(rules);

  // Game
  for (let i = 0; i < steps; i += 1) {
    const firstNum = game.generateRandomNum(difficultyIndicator);
    const progressionStep = game.generateRandomNum(progressionStepMax);

    const progression = generateProgression(firstNum, progressionLength, progressionStep);

    const replacedIndex = game.generateRandomNum(progression.length) - 1;

    const correctAnswer = progression[replacedIndex];
    progression[replacedIndex] = '..';

    const question = progression.join(' ');
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

export default brainProgression;
