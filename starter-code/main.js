console.log("JS file is connected to HTML! Woo!")
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

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


var cards = ['queen', 'queen', 'king', 'king',];

var cardsInPlay = []; 


var board = document.getElementById('game-board');
function createBoard() {
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('div');
		cardElement.className = 'card';

		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		
		board.appendChild(cardElement);
		board.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') 
	{
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
	}
	else 
	{
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
	}
 
	if (cardsInPlay.length === 2){
		isMatch(cardsInPlay);

		cardsInPlay = [];
}
}

function isMatch(cards) {
	if (cards[0] === cards[1])
	{
		alert("You found a match!");
	}
	else 
	{
		alert("Try Again.");
	}
}

createBoard();


