/* 
TODO: 
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

var userChoice;
var userNumber;
var computerNumber;
var sumResult;

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Eseguo controlli sui valori inseriti.*/
do {
	userChoice = prompt(`Scegli pari o dispari! Pari = 'P' | Dispari = 'D'`).toUpperCase();
} while (userChoice != 'D' && userChoice != 'P');

do {
	userNumber = parseInt(prompt(`Scegli un numero da 1 a 5`));
} while (userNumber < 1 || userNumber > 5 || isNaN(userNumber));

/* Definisco la variabile per la generazione di un numero intero random */
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Richiamo la funzione appena creata assegnadone il valore a computerNumber */
computerNumber = getRandomInt(1, 5);
/* Riassegno a sumResult la somma dei numeri dell'utente e del PC */
sumResult = userNumber + computerNumber;
