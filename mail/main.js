//la mia array di email
let utentiValidi = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"]; //più corretto let, const funziona comunque
console.log("Carico lista utenti autorizzati");

let input = prompt ("Inserisci la tua e-mail")
input = input.toLowerCase(); //le email non sono case sensitive!
console.log("Tentativo di accesso da parte di", input);


//dichiariamo la nuova mail
let newUser;
//input è nella array utentiValidi?
let trovato = false;
//dichiaro ora il filtro, così posso usarlo in tutto il codice
//   let i=0;

for (let i=0; i < utentiValidi.length; i++) {
    if (utentiValidi[i] == input) {
        trovato=true;
        break; //uscita anticipata dal loop
    }
}

if(trovato) {
    alert("Benvenuto" + utentiValidi[i]);
    console.log(utentiValidi[i] +"è abilitato");
    document.getElementById("output").innerHTML = utentiValidi[i];
}else {
    //questo è il caso in cui non ho trovato l'utente
    console.log(input,"non è abilitato");
    alert("La mail inserita non é valida");
    let vuoleRegistrarsi = confirm("Vuoi registrati?");
    if (vuoleRegistrarsi) {
        utentiValidi.push(input);
        console.log("Aggiunto", input , "alla lista utenti validi");
        console.log(utentiValidi);
    }
}