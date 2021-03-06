/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

//----- VARIABLES -----//
var mines = [];
var tries = [];
var randomMine;
var userTry;
var maxTries;
var difficulty = 0;
var triesCounter = 1;
var minesRange = 100;
var minesQty = 16;
var gameOver = false;

// choose difficulty
difficulty = parseInt(prompt("Scegliere la difficoltà da 0 a 2:\n0 (Facile)\n1 (Medio)\n2 (Difficile)"));

switch (difficulty) {

    case 0:
        break;
    case 1:
        minesRange = 80;
        break;
    case 2:
        minesRange = 50;
        break;
    default:
        alert("Difficolta' facile impostata per default");
}

maxTries = minesRange - minesQty;

//fill mines array
while (mines.length < minesQty) {
    randomMine = getRandomNumber(1, minesRange);

    if (!mines.includes(randomMine)) {
        mines.push(randomMine);
    }
}

//user try prompt
while (tries.length < maxTries && gameOver == false) {

    do {
        userTry = parseInt(prompt("Tentativo #" + triesCounter + ": Inserisci un numero!"));        
    } while (isNaN(userTry) || userTry < 1 || userTry > minesRange || tries.includes(userTry));
    
    if (mines.includes(userTry)) {
        gameOver = true;        
    }

    tries.push(userTry);
    triesCounter++;        
}

//game results with points
if (gameOver == true) {    
    alert("HAI PERSO!\nSei esploso alla posizione " + userTry + " \nHai totalizzato " + (triesCounter - 1) + " punti!");
} else if (tries.length == maxTries) {
    alert("HAI VINTO!\nHai raggiunto il numero massimo di " + maxTries + " tentativi\nHai totalizzato " + (triesCounter - 1) + " punti!");
}

//---------- FUNCTIONS ------------//
//returns random int in specified range
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
