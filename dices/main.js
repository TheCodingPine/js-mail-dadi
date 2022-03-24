let user = prompt("Inserisci il tuo nome per giocare!");

//generiamo il tiro del player
let userDice = Math.floor(Math.random() * 6) + 1;
console.log("Tiro utente", userDice);
//generiamo il tiro del pc
let iaDice = Math.floor(Math.random() * 6) + 1;
console.log("Tiro computer", iaDice);

if (userDice > iaDice) {
    console.log(userDice, "è più alto di", iaDice,"!", user, ", hai vinto!");
} else if (userDice < iaDice) {
    console.log(userDice, "è minore di", iaDice,"! Peccato", user, ", hai perso!");
}else {console.log(userDice, "contro", iaDice,"!", user, ", è un pareggio");
    }