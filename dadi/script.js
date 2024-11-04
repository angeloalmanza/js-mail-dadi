// lancio dei dadi
const userNum = Math.floor(Math.random() * 6) + 1;
console.log(`Il lancio dell'utente è ${userNum}`);

const cpuNum = Math.floor(Math.random() * 6) + 1;
console.log(`Il lancio della cpu è ${cpuNum}`);

if(userNum > cpuNum){
    console.log("L'utente ha vinto!");
}else if(cpuNum > userNum){
    console.log("La cpu ha vinto!");
}else{
    console.log("Pareggio");
}

