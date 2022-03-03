
// metodo parola palindroma senza function

const userInputWord = [prompt("inserisci una parola")];

let dividedWord = userInputWord[0].split('');

dividedWord = dividedWord.reverse('');

let inverseWord = dividedWord.join('');

if (userInputWord == inverseWord){
    console.log(' la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
};


// metodo parola palindroma con function


function invertedWord (word){
    let inverseWord = word.split('').reverse().join('');
    return inverseWord;
};

if (userInputWord[0] == invertedWord(userInputWord[0])){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}