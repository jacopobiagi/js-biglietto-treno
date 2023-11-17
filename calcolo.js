let eta = prompt("quanti anni ha il passeggero?");
let distanza = prompt("quanti km percorri?");
let prezzoLordo = distanza * 0.21;
let prezzoNetto = 0;


if(eta <= 17){
    prezzoNetto = prezzoLordo - (prezzoLordo * 0.2);

}else if(eta >= 65){
    prezzoNetto = prezzoLordo - (prezzoLordo * 0.45);

}
else{
    prezzoNetto = prezzoLordo;
}

document.getElementById("costo").innerHTML = "Il costo del tuo biglietto è di " + prezzoNetto.toFixed(2) +"";