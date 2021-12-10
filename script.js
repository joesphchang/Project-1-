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

// lives
let lives = 9;
// timer
let timer = 10;
// Image index
let imgIndex = 0;

// Generating random words
let gameWord = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log(gameWord);

// remaining lettters
let remainingLetters = gameWords.length;

/*----- cached element references -----*/

const resetBtn = document.querySelector('#resetBtn');
const gameBoard = document.querySelector('.grid');
const letterBtn = document.querySelector('#alphabet');
const spaces = document.querySelector('.space');
const showLives = document.querySelector('.livesCount');
const spaceImgs = document.querySelectorAll('.cat-spaceships img');

/*----- event listeners -----*/
letterBtn.addEventListener('click', (event) => {
	handleClick(event);
});
resetBtn.addEventListener('click', function () {
	updateGameBoard();
});
/*----- functions -----*/

// function for alphabet usage
// also create a list of letters and add it to alphabet container
function handleClick(event) {
	// console.log(event.target.id);
	event.target.style.color = 'red';
	event.target.disabled = 'disabled';
	if (gameWord.includes(event.target.innerText.toLowerCase())) {
		for (let i = 0; i < gameWord.length; i++) {
			if (gameWord[i] === event.target.innerText.toLowerCase()) {
				document.querySelectorAll('.active')[i].innerText =
					event.target.innerText.toLowerCase();
			}
		}
	} else {
		playGame = function () {
			if (!gameWord.includes(event.target.innerText.toLowerCase())) {
				spaceImgs[imgIndex].style.visibility = 'visible';
				imgIndex++;
				lives--;
				showLives.innerHTML = 'You have ' + lives + ' lives';
			}
		};
	}
	if (lives === 0) {
		alert('you lose!');
		location.reload();
	}
	playGame();
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
	// console.log('hello from updateGameBoard');
	location.reload();
}
