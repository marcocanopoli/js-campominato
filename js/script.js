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
var maxMines = 100;
var minesQty = 16;
var gameOver = false;
var counter = 1;
var difficulty = 0;

// choose difficulty
difficulty = parseInt(prompt("Scegliere la difficoltà:\n0 - Facile\n1 - Medio\n2 - Difficile"));

switch (difficulty) {

    case 0:
        maxMines = 100;
        break;
    case 1:
        maxMines = 80;
        break;
    case 2:
        maxMines = 50;
        break; 
    default:
        alert("Difficolta' facile impostata per default");
}

maxTries = maxMines - minesQty;

//fill mines array
for (var i = 0; i < minesQty; i++) {

    do {
        randomMine = getRandomNumber(1, maxMines);
    } while (mines.includes(randomMine));

    mines.push(randomMine);
}
console.log("Posizione mine:", mines);

//user attempt prompt
while (tries.length < maxTries && gameOver == false) {

    do {
        userTry = parseInt(prompt("Tentativo #" + counter + ": Inserisci un numero!"));        
    } while (isNaN(userTry) || userTry < 1 || userTry > maxMines || tries.includes(userTry));
    
    if (mines.includes(userTry)) {
        tries.push(userTry);
        gameOver = true;        
    }
    else {
        tries.push(userTry);
        counter++;        
    }
    console.log(tries.length);
}

if (gameOver == true) {    
    alert("HAI PERSO!\nHai totalizzato " + (counter - 1) + " punti!");
} else if (tries.length == maxTries) {
    alert("Raggiunto il numero massimo di " + maxTries + " tentativi, HAI VINTO!\nHai totalizzato " + (counter - 1) + " punti!");
}
console.log("Tentativi:", tries);

//---------- FUNCTIONS ------------//
function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}