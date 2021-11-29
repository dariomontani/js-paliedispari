// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// (prima senza funzione e poi con funzione)

// creo due array vuoti dove andrò ad inserire la parola scomposta e la parola al contrario per verificare se sono uguali
const arrayParola = [];
const arrayParolaContrario = [];

// chiedo all'utente di inserire una parola 
let parolaUtente = prompt('Inserisci una parola');

// scompongo la parola dell'utente e la inserisco nell'arrayParola
let parolaScomposta = parolaUtente.split('');
arrayParola.push = parolaScomposta;
console.log('parola scomposta',arrayParola);

// inverto l'ordine delle lettere della parola dell'utente e la inserisco nell'array
let parolaContrario = parolaScomposta.reverse();
arrayParolaContrario.push = parolaContrario;
console.log('parola Contrario', arrayParolaContrario);



