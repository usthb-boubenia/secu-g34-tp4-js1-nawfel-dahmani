"use strict";

// Déclaration du tableau des étudiants, vu dans le cours slide 44   
const Students = [
    [1000, "JOHN", "DOE", 14, 5],
    [2000, "BOB", "CARLTON", 7, 1],
    [3000, "RAYANE", "SMITH", 13, 3]
];

// Fonction qui retourne true si la note est supérieure ou égale à 10, false sinon
// vu dans le cours slide 46      
function B(note) {
    return note >= 10; 
}

        
function A() {
    for (let s of Students) {  // On utiltise for...of vu dans le cours slide 44
        let result; // Variable pour stocker le résultat "ADMIS" ou "AJOURNE", vu dans le cours slide 51
        switch (B(s[3])) {  // On utltise switch vu dans le cours slide 43
            case true:
                result = "ADMIS";
                break;
            case false:
                result = "AJOURNE";
                break;
        }
        console.log(s[0]+': '+result);
    }
}