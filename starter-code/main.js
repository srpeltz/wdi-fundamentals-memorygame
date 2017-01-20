console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// if (cardOne == cardTwo) {
// 	alert = "You found a match!";
// } else {
// 	alert = "Sorry, try again";
// }

// if (cardThree == cardFour) {
// 	alert = "You found a match!";
// } else {
// 	alert = "Sorry, try again";
// }

var document.getElementById('game-board');

function createBoard() {
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		board.appendChild(cardElement);
	}
}


var cards = ['queen', 'queen', 'king', 'king',];
var cardsInPlay = []; 
for (var i=0; i<cards.length; i++) 
{
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards)
}

function isMatch(cards) {
	if (cards[0] === cards[1])
	{
		alert("You found a match!");
	}
	else {
		alert("Try Again.");
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);
	}
	else (cardsInPlay = [];)
};

