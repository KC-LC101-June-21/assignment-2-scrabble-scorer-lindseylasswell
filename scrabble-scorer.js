// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

let simpleScore;

let vowelBonusScore;

let scrabbleScore;

let userWord = " ";

let simpleNumber = 0;

let scoringAlgorithms = [];

function transform() {};

let newPointStructure;

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue} \n`
		 };
      console.log(`Total number of points: ${letterPoints}.`);
	  } 
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
    userWord = input.question("Let's play some scrabble! Enter a word to score:");
    // oldScrabbleScorer(userWord); //input userWord into oldScrabbleScorer function for letter score
    return userWord;
};

simpleScore = function(userWord) {
  for (let i = 0; i <= userWord.length; i++) {
    simpleNumber = i;
  }
  console.log(simpleNumber)
  return simpleNumber
};

vowelBonusScore = function(userWord) {
  let score = 0;
  for (i=0; i<userWord.length; i++) {
    if (userWord[i] ==['a','e','i','o','u']); {
      // console.log(i);
      score += 3;
      // console.log(score);
    } 
      score += 1;
  };
  console.log(score);
  return score;
};
//creating objects for scoringAlgorithms
let simple = {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  function: simpleScore(userWord),
};

let vowels = {
  name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  function: vowelBonusScore(userWord),
};

let scrabble = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  function: oldScrabbleScorer(userWord),
};

scoringAlgorithms = [simple, vowels, scrabble]; //algorithm for storing types of scoring

function scorerPrompt() {
  let scoreType = input.question(`Select your score type: \n 
  0 - ${scoringAlgorithms[0]name}: {scoringAlgorithms[0].description} \n
  1 - ${scoringAlgorithms[1]name}: ${scoringAlgorithms[1].description} \n
  2 - ${scoringAlgorithms[2]name}: ${scoringAlgorithms[2].description} \n`);

  console.log(`You chose ${scoreType} for ${scoringAlgorithms[scoreType].name}`);
  return scoreType;
}
console.log(scoringAlgorithms);

function runProgram(userWord) {
  initialPrompt();
  scorerPrompt();
  // vowelBonusScore(userWord);
};


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

