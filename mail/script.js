const mail = ["pippo@gmail.com", "paperino@gmail.com", "topolino@gmail.com"];

// richiesta all'utente
const userMail = prompt("Inserisci la tua mail");

let found = false;

// controllo se l'email è presente nell'array
for(let i = 0; i < mail.length; i++){
   if(userMail === mail[i])
    found = true;
}

if(found){
    console.log("Puoi accedere");
}else{
    console.log("Non puoi accedere");
}