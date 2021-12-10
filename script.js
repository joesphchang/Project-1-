/*----- constants -----*/
const gameWords = [
	'asteroid',
	'jupiter',
	'comet',
	'moon',
	'uranus',
	'crater',
	'astronomy',
	'satelite',
];

/*----- app's state (variables) -----*/
// stored guesses
let guess = [];
// correct guesses
let correctGuesses = [];
// wrong guesses
let wrongGuesses = [];
// number of spaces in word '-'
let space = '';
// lives
let lives = 9;
// timer
let timer = 10;
// lives counter
let counter;
// Selected Words
// let selectedWords = gameWords[0];

// Generating random words
let gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log(gameWord);

// remaining lettters
let remainingLetters = gameWords.length;

/*----- cached element references -----*/

const resetBtn = document.querySelector('#resetBtn');
const gameBoard = document.querySelector('.grid');
const letterBtn = document.querySelector('#alphabet');
const canvas = document.querySelector('.canvas');
const spaces = document.querySelector('.space');
const showLives = document.querySelector('.livesCount');

/*----- event listeners -----*/
// gameBoard.addEventListener('click', init);
letterBtn.addEventListener('click', (event) => {
	handleClick(event);
});
resetBtn.addEventListener('click', function() {
	updateGameBoard();
});
/*----- functions -----*/

// function for alphabet usage
// also create a list of letters and add it to alphabet container
function handleClick(event) {
	// console.log('hello from handleClick');
	console.log(event.target.id);
	event.target.style.color = 'red';
	event.target.disabled = 'disabled';
	if (gameWord.includes(event.target.innerText.toLowerCase())) {
		console.log('You are correct!');
		for (let i = 0; i < gameWord.length; i++) {
			if (gameWord[i] === event.target.innerText.toLowerCase()) {
				document.querySelectorAll('.active')[i].innerText =
					event.target.innerText.toLowerCase();
			}
		}
	} else {
		playGame = function () {
			showLives.innerHTML = 'You have ' + lives + ' lives';
			const imgBlock = document.querySelectorAll('.img-blocks');
			while ((lives -= 1)) {
				if (wrongGuesses !== gameWord) imgBlock.style.opacity = '1';
				document.body.appendChild(imgBlock);
				console.log(wrongGuesses);
			}
			for (let i = 0; i < gameWord.length; i++) {
				if (correctGuesses + newSpaces === gameWord.length) {
					showLives.innerHTML = 'You guessed the word right!';
				}
			}
		};
	}
	playGame();
	updateGameBoard();
}

function randomWords() {
	// console.log('hello from random words');
	for (let i = 0; i < gameWord.length; i++) {
		const newSpaces = document.createElement('p');
		newSpaces.setAttribute('class', 'active');
		newSpaces.innerHTML = '_';
		spaces.append(newSpaces);
	}
}
randomWords();

function updateGameBoard() {
	console.log('hello from updateGameBoard');

}
