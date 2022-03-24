//la mia array di email
const utentiValidi = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
console.log("Carico lista utenti autorizzati");

let input = prompt ("Inserisci la tua e-mail")
console.log("Tentativo di accesso da parte di", input);

//input è nella array utentiValidi?
let conferma = false;
//dichiaro ora il filtro, così posso usarlo in tutto il codice
let filtro=0;

for (let filtro=0; filtro < utentiValidi.length; filtro++) {
    if (utentiValidi[filtro] == input) {
        conferma=true;
        alert ("Benvenuto", utentiValidi[filtro]);
        console.log(utentiValidi[filtro],"è abilitato");
        filtro = 0; //resetto il filtro per evitare problemi
        break;
    } else if (filtro == utentiValidi.length-1) { //e solo se quindi ha fatto tutto il giro dell'array
        alert ("La mail inserita non é valida");
        break;
        }
}