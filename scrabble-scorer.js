// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

// let simpleScore;

// let vowelBonusScore;
let word = " ";

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

const vowelsScore = {
  3: ['A', 'E', 'I', 'O', 'U'],
  1: ['B','C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
};


// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
    userWord = input.question("Let's play some scrabble! Enter a word to score:");
    // oldScrabbleScorer(userWord); //input userWord into oldScrabbleScorer function for letter score
    return userWord;
};

//functions for scoringAlgorithms
function simpleScore(word) {
  for (let i = 0; i <= userWord.length; i++) {
    simpleNumber = i;
  }
  console.log(simpleNumber)
  return simpleNumber
};

function vowelBonusScore(word) {
  let letterPoints = 0;
  word = word.toUpperCase();

	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelsScore) {
 
		 if (vowelsScore[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue} \n`
		 };
    
	  }   console.log(`Total number of points: ${letterPoints}.`);
	}
	return letterPoints;
}

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

//creating objects for scoringAlgorithms
let simple = {
  name: 'Simple Score',
  description: 'Each letter is worth 1 point.',
  function: simpleScore(word),
};

let vowels = {
  name: 'Bonus Vowels',
  description: 'Vowels are 3 pts, consonants are 1 pt.',
  function: vowelBonusScore(word),
};

let scrabble = {
  name: 'Scrabble',
  description: 'The traditional scoring algorithm.',
  function: oldScrabbleScorer(word),
};

scoringAlgorithms = [simple, vowels, scrabble]; //algorithm for storing types of scoring

function scorerPrompt() {
  console.log(`Which scoring algorithm would you like to use?\n 
  0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description} \n
  1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description} \n
  2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description} \n`);
  let scoreType = input.question(`Enter 0, 1, or 2: `);
  console.log(`You chose ${scoreType} for ${scoringAlgorithms[scoreType].name}`);
 
  if (scoreType == 0) {
    simpleScore(word); 
    } else if (scoreType == 1) {
      vowelBonusScore(word);
    } else if (scoreType == 2) {
      oldScrabbleScorer(word); 
    } else {
      console.log(`${scoreType} is not one of the choices. Please try again.`);
    };
} 

// console.log(scoringAlgorithms);

function runProgram(word) {
  initialPrompt();
  scorerPrompt(word);
  // vowelBonusScore();
};

runProgram(userWord)


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

