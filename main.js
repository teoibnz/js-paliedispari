
// !!metodo parola palindroma senza function

// const userInputWord = [prompt("inserisci una parola")];

// let dividedWord = userInputWord[0].split('');

// dividedWord = dividedWord.reverse('');

// let inverseWord = dividedWord.join('');

// if (userInputWord == inverseWord){
//     console.log(' la parola è palindroma');
// } else {
//     console.log('la parola non è palindroma');
// };


// !! metodo parola palindroma con function


// function invertedWord (word){
//     let inverseWord = word.split('').reverse().join('');
//     return inverseWord;
// };

// if (userInputWord[0] == invertedWord(userInputWord[0])){
//     console.log('la parola è palindroma');
// } else {
//     console.log('la parola non è palindroma');
// }



// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let oddOrEven = "";

while (oddOrEven != "pari" && oddOrEven != 'dispari'){
    oddOrEven = prompt('scegli se pari o dispari');
    console.log('L\'utente ha scelto' + '  ' + oddOrEven);
};


let userNumber = 0;

while (userNumber < 1 || userNumber > 5){
    userNumber = parseInt(prompt('inserisci un numero da 1 a 5' ));
    console.log('L\'utente ha scelto'+ '  ' + userNumber);
}
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function randomInt (minValue, maxValue){
	if ( isNaN (parseInt (minValue)) ||  (isNaN  (parseInt(maxValue)))) {
	console.error("randomInt(min, max) need two numbers as argument");
}
	return (Math.floor(Math.random() * ((maxValue + 1) - minValue) + minValue));

};


const aINumber = randomInt(1,5);

console.log("il pc ha scelto il numero " + aINumber);

// Sommiamo i due numeri

let pointSum = userNumber + aINumber;
console.log('la somma è ' + pointSum);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isEven(number){
    if ( number % 2 == 0 ){
        return true;
    }
    return false;
}
// Dichiariamo chi ha vinto.


if ((oddOrEven == 'pari' && isEven(pointSum)) ||
    (oddOrEven == 'dispari') && !isEven(pointSum)) {
        console.log('Hai vinto!')
    } else {
        console.log('Hai perso!')
    }

