//la mia array di email
const utentiValidi = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
console.log("Carico lista utenti autorizzati");

let input = prompt ("Inserisci la tua e-mail")
console.log("Tentativo di accesso da parte di", input);

//input è nella array utentiValidi?
let conferma = false;

for (let filtro=0; filtro < utentiValidi.length; filtro++) {
    if (utentiValidi[filtro] == input) {
        conferma=true;
        alert ("Benvenuto", utentiValidi[filtro]);
        console.log(utentiValidi[filtro],"è abilitato");
        break;
    } else {alert ("La mail inserita non é valida");}
}