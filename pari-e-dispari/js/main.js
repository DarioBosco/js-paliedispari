/* 
TODO: 
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

var inputChoice = '';
var inputNumber = 0;
var computerNumber = 0;
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Eseguo controlli sui valori inseriti.*/
do {
	inputChoice = prompt(`Scegli pari o dispari! Pari = 'P' | Dispari = 'D' `).toUpperCase();
	console.log(inputChoice);
} while (inputChoice != 'D' && inputChoice != 'P');

do {
	inputNumber = parseInt(prompt(`Scegli un numero da 1 a 5`));
	console.log(inputNumber);
} while (inputNumber < 1 || inputNumber > 5 || isNaN(inputNumber));

/* Definisco la variabile per la generazione di un numero intero random */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Richiamo la funzione appena creata assegnadone il valore a computerNumber */
computerNumber = getRandomInt(1, 5);
