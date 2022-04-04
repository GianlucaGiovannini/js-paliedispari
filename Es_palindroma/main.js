/* TRACCIA
    Chiedere all’utente di inserire una parola, creare una funzione per capire se la parola inserita è palindroma
*/

/**
 * #Controllo se una parola è palindroma
 * @param {string} parola_scelta inserisci la parola che l'utente digita
 * @returns ti dice se la parola è palindroma o no
 */
/* function palindromoControllo(parola_scelta) {
    let parolaInArray = parolaUser.split("");

    let arrayElementiInvertiti = parolaInArray.reverse();

    let parolaInvertita = parolaInArray.join("");

    if (parolaUser === parolaInvertita) {
        palindromaSioNO = "la parola è palindroma"
    } else {
        palindromaSioNO = "la parola non è palindroma"
    }
    return palindromaSioNO;
}
console.log(palindromoControllo(parolaUser)) */

// chiedi all'utente di inserire una parola
const parolaUser = prompt("inserisci una parola")
console.log(parolaUser)
    // dichiaro una variabile per estrapolare il risultato della function
let palindromaSioNO;

function palindromoControllo(parola_scelta) {
    // trasformo la parola in un array (quindi ogni lettera diventa un elemento)
    let parolaInArray = parola_scelta.split("");
    console.log(parolaInArray);

    // invertire la sequenza dell'array 
    let arrayElementiInvertiti = parolaInArray.reverse();
    console.log(parolaInArray)

    // unisco le lettere dell'arrai in una stringa
    let parolaInvertita = parolaInArray.join("");
    console.log(parolaInvertita);

    // controllo se la parola dell'utente è uguale alla parola invertita
    if (parola_scelta === parolaInvertita) {
        palindromaSioNO = "la parola è palindroma"
    } else {
        palindromaSioNO = "la parola non è palindroma"
    }
    // faccio tornare il risultato del if in base al risultato che ne esce
    return palindromaSioNO;
}
// stampo in console la funzione fatta sulla parola dell'utente e mi fa tornare il risultato di "palindromaSioNo"
console.log(palindromoControllo(parolaUser))

// SOLUZIONE FABIO
/**
 * 
 * @param {string} word
 * @returns {string}
 */
function reverseWord(word) {
    return word.split("").reverse().join("")

}

console.log(reverseWord(parolaUser))

function is_palindrom(word) {
    const reversedWord = reverseWord(word)

    if (reversedWord === word) {
        return true
    } else {
        return false
    }
}

if (is_palindrom(parolaUser)) {
    console.log(parolaUser, " Is palindrom")
} else {
    console.log(parolaUser, "Is not palindrom")
}