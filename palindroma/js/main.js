/* 
TODO:
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
*/

function isPalindrome(userInput) {
	var userInput = prompt('Inserisci una parola');
	userInput = userInput.toLowerCase();
	return userInput == userInput.split('').reverse().join('');
}

if (isPalindrome() == true) {
	console.log(`La parola inserita e' palindroma`);
} else {
	console.log(`La parola inserita NON e' palindroma`);
}
