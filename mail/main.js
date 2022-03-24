//la mia array di email
const utentiValidi = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
console.log("Carico lista utenti autorizzati");

let input = prompt ("Inserisci la tua e-mail")
input = input.toLowerCase(); //le email non sono case sensitive!
console.log("Tentativo di accesso da parte di", input);


//dichiariamo la nuova mail
let newUser;
//input è nella array utentiValidi?
//let conferma = false;
//dichiaro ora il filtro, così posso usarlo in tutto il codice
let filtro=0;

for (let filtro=0; filtro < utentiValidi.length; filtro++) {
    if (utentiValidi[filtro] == input) {
        //conferma=true;
        alert ("Benvenuto", utentiValidi[filtro]);
        console.log(utentiValidi[filtro],"è abilitato");
        document.getElementById("output").innerHTML = utentiValidi[filtro];
        filtro = 0; //resetto il filtro per evitare problemi
        break; //uscita anticipata dal loop
    } else if (filtro == utentiValidi.length-1) { //e solo se quindi ha fatto tutto il giro dell'array
        console.log(input,"non è abilitato");
        alert ("La mail inserita non é valida");
        alert ("Vuoi registrati?")
        newUser = prompt ("Inserisci la mail con la quale ti vuoi registrare");
        newUser = newUser.toLowerCase();
        utentiValidi.push(newUser);
        console.log("Aggiunto", newUser , "alla lista utenti validi");
        filtro = 0; // resetto per nuovi tentativi
            //dentro, printo la nuova lista
            for (let filtro=0; filtro < utentiValidi.length; filtro++)  {
                console.log(utentiValidi[filtro]);
            }
        break; //uscita anticipata dal loop per evitare enne messaggi di errore
        }
}