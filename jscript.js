"use strict";

// 1. uzduotis
// Sukurkite funkciją, kuria iškvietus masyvą galima papildyti norimu elementu.
// Informacija paimama iš input laukelio. Funkcija iškviečiama paspaudus mygtuką.


let masyvas = [1, 2, 3, "varle", "77", "kodas", 7];
document.getElementById("masyvoatvaizdavimas").value = masyvas;


document.getElementById("papildymas1").addEventListener ("click", function() {

        let masyvoElementas = document.getElementById("masyvoElementas").value;
        masyvas.push(masyvoElementas);
        document.getElementById("masyvoatvaizdavimas").value = masyvas;
        
});


// 2. uzduotis
//  Pasinaudodami ciklu, sukurkite funkciją, kuri traukia kvadratinę šaknį iš skaičiaus.

