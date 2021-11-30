// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

// chiedo all'utente di inserire una parola
// let parolaUtente = prompt('Inserisci una parola');

// // scompongo la parola dell'utente
// let parolaScomposta = parolaUtente.split('');

// // inverto l'ordine delle lettere della parola dell'utente 
// let parolaContrario = parolaScomposta.reverse();

// // ricompongo la parola
// let parolaRicomposta = parolaContrario.join('');

// // verifico se la parola è uguale scritta al contrario
// if (parolaUtente == parolaRicomposta) {
//     console.log('parola palindroma');
// } else {
//     console.log('la parola NON è palindroma');
// }

function palindroma (parola1) {
    let parolaScomposta = parola1.split('');
    let parolaContrario = parolaScomposta.reverse();
    let parolaRicomposta = parolaContrario.join('');
    if (parola1 == parolaRicomposta) {
        console.log('parola palindroma');
    } else {
        console.log('la parola NON è palindroma');
    }

    return parolaScomposta;
}

const risultato = palindroma (prompt('Inserisci una parola'));






