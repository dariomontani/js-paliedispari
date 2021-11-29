// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto
// (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

// L’utente sceglie pari o dispari
const sceltaPariDispari = prompt('scegli pari o dispari');
console.log('pari o dispari', sceltaPariDispari);

// L’utente inserisce un numero da 1 a 5.
const numeroUtente = parseInt(prompt('inserisci un munero da 1 a 5'));
console.log('Utente', numeroUtente);

// Generiamo un numero random(sempre da 1 a 5) per il computer
const numeroComputer = Math.floor(Math.random() * 10) + 1;
console.log('computer', numeroComputer);

// Sommiamo i due numeri
let somma = numeroUtente + numeroComputer;
console.log('somma', somma);

// verifico se l'utente ha vinto o gha perso
if (somma % 2 == 0 && sceltaPariDispari == 'pari') {
    console.log('HAI VINTO CON PARI');
} else if (somma % 2 == 1 && sceltaPariDispari == 'dispari') {
    console.log('HAI VINTO CON DISPARI');
} else {
    console.log('HAI PERSO');
}


