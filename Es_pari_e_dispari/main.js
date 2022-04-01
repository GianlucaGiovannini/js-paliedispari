/* 
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/

/* L’utente sceglie pari o dispari */
const userSceltaPoD = prompt("Scegli pari o dispari [pari/dispari]")

/* l'utente sceglie un numero da 1 a 5  */
const userSceltaNumero = Number(prompt("Scegli un numero da 1 a 5"))

if (isNaN(userSceltaNumero)) {
    alert("Non hai scelto un numero");
}

console.log(`Hai scelto ${userSceltaPoD}`)
console.log(`Hai scelto il numero ${userSceltaNumero}`)

/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione) */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pcNumero = getRandomInteger(1, 5);
console.log(`il numero del pc è ${pcNumero}`)

/* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) */
// dichiaro una variabile per salvare la somma che verrà fatta nella funzione
let sum;
let risultatoPoD;

function parioDispari(num1, num2) {
    // sommo i due numeri
    sum = num1 + num2;

    // controllo se la somma è pari o dispari
    if (sum % 2 == 0) {
        risultatoPoD = "pari"
    } else {
        risultatoPoD = "dispari"
    }
    return risultatoPoD
}

const risultatoParioDispari = parioDispari(userSceltaNumero, pcNumero);

console.log(`i numeri sommati fanno ${sum} quindi è ${risultatoParioDispari}`);

/* Dichiariamo chi ha vinto. */
let risultato;

if (risultatoPoD == userSceltaPoD) {
    risultato = "Hai vinto !"
} else {
    risultato = "Mi dispiace hai perso"
}

console.log(risultato)