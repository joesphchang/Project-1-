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
const winState = document.querySelector('#winState');
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
				// check to see if winner 
				// checkWinner();
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

// function checkWinner() {
// 	let correctGuesses = document.querySelectorAll('.active');
// 	if (correctGuesses.forEach(element => element.includes("_"))) {
// 		correctGuesses.innerText = 'You won!';
// 		winState.append(correctGuesses);
// 	}
// }


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

// Modal 
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

//Functions
const openModal = () => {
	modal.style.display = 'block';
};

const closeModal = () => {
	modal.style.display = 'none';
};

//Event Listeners
openBtn.addEventListener('click', openModal);

close.addEventListener('click', closeModal);