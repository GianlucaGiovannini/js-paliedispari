/* TRACCIA
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
    console.log(location.reload())
}

if (userSceltaPoD != "pari" && userSceltaPoD != "dispari") {
    console.log(location.reload())
}

console.log(`Hai scelto ${userSceltaPoD}`)
console.log(`Hai scelto il numero ${userSceltaNumero}`)

/* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione) */
/**
 * #Numero casuale tra 2 numeri
 * @param {number} min inserisci il numero minimo
 * @param {number} max inserisci il numero massimo
 * @returns un numero random tra il numero minimo e massimo compresi
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pcNumero = getRandomInteger(1, 5);
console.log(`il numero del pc è ${pcNumero}`)

// sommo i due numeri
let somma = pcNumero + userSceltaNumero;

/* Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) */
// dichiaro una variabile per salvare la somma che verrà fatta nella funzione ed il risultato
let risultatoPoD;

/**
 * #Pari o Dispari ?
 * @param {number} numero numero da controllare se è pari o dispari
 * @returns se il numero è pari o dispari
 */
function parioDispari(numero) {

    // controllo se la somma è pari o dispari
    if (numero % 2 == 0) {
        risultatoPoD = "pari"
    } else {
        risultatoPoD = "dispari"
    }
    return risultatoPoD
}
// creo una costante così che il console log sotto mi funziona ( credo sia perché è fuori dalla funzione prima che sia inizializzata esternamente alla funzione)
const risultatoParioDispari = parioDispari(somma);

console.log(`i numeri sommati fanno ${somma} quindi è ${risultatoPoD}`);

/* Dichiariamo chi ha vinto. */
let risultato;

if (risultatoPoD == userSceltaPoD) {
    risultato = "Hai vinto !"
} else {
    risultato = "Mi dispiace hai perso"
}

console.log(risultato)