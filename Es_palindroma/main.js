/* 
    Chiedere all’utente di inserire una parola, creare una funzione per capire se la parola inserita è palindroma
*/

// chiedi all'utente di inserire una parola
const parolaUser = prompt("inserisci una parola")
console.log(parolaUser)
    // dichiaro una variabile per estrapolare il risultato della function
let palindromaSioNO;

function palindromoControllo(parola_scelta) {
    // trasformo la parola in un array (quindi ogni lettera diventa un elemento)
    let parolaInArray = parolaUser.split("");
    console.log(parolaInArray);

    // invertire la sequenza dell'array 
    let arrayElementiInvertiti = parolaInArray.reverse();
    console.log(parolaInArray)

    // unisco le lettere dell'arrai in una stringa
    let parolaInvertita = parolaInArray.join("");
    console.log(parolaInvertita);

    // controllo se la parola dell'utente è uguale alla parola invertita
    if (parolaUser === parolaInvertita) {
        palindromaSioNO = "la parola è palindroma"
    } else {
        palindromaSioNO = "la parola non è palindroma"
    }
    // faccio tornare il risultato del if in base al risultato che ne esce
    return palindromaSioNO;
}
// stampo in console la funzione fatta sulla parola dell'utente e mi fa tornare il risultato di "palindromaSioNo"
console.log(palindromoControllo(parolaUser))