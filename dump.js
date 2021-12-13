// document.body.appendChild(imgBlock);
// console.log('hello from handleClick');
// gameBoard.addEventListener('click', init);
// // wrong guesses
// let wrongGuesses = [];
// correct guesses
let correctGuesses = [];
	// for (let i = 0; i < spaceImgs.length; i++)
    // stored guesses
let correctGuess = [];
// number of spaces in word '-'
let space = '';console.log('You are correct!');

function checkWinner() {
	let correctGuesses = document.querySelectorAll('.active');
	if (correctGuesses.forEach(element => element.includes(‘_’)) {
		correctGuesses.innerHTML = 'You won!';
		winState.append(correctGuesses);
	}
}
// check to see if there was a win 
// check to see if spaces are filled up
// grab ALL the active class elements 
// loop through 'active' class elements 
// if none of them have a under-score innerHTML the user wins! 

function checkWinner() {
	let correctGuesses = document.querySelectorAll('.active');
	for (let i = 0; i < event.target.length; i++) {
		if (correctGuesses + gameWord === event.target.length) {
			showLives.innerHTML = "You Won"';
		}
	}
}