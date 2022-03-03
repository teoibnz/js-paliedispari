
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
const oddOrEven = prompt('scegli se pari o dispari');
console.log('L\'utente ha scelto' + '  ' + oddOrEven);
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5' ));
console.log('L\'utente ha scelto'+ '  ' + userNumber);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber () {
    let num = Math.floor(Math.random(1) * 6);
    return num;
};

console.log("il pc ha scelto il numero " + randomNumber());

// Sommiamo i due numeri

const pointSum = userNumber + randomNumber();
console.log('la somma è ' + pointSum);


// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.