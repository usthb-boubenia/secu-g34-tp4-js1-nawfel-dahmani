// Declatation d'un tableau simple de chaînes de caractères, vu dans le cours slide 38
EtudTab = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Déclaration de l'objet person, vu dans le cours slide 39
const person = {
    nom: "John", 
    prenom: "DOE",
    age: 30
};

// Déclaration du tableau d'objets étudiants, vu dans le cours slide 44
const etudiants = [
    {
        nom: "nom1",
        prenom: "prenom1",
        age: 21
    },
    {
        nom: "nom2",
        prenom: "prenom2",
        age: 22
    },
    {
        nom: "nom3",
        prenom: "prenom3",
        age: 23
    },
];

function f1() {
    // Ici, on utilise boucle for, vu dans le cours slide 44
    for (let i = 0; i < EtudTab.length; i++) {
        console.log(EtudTab[i]);
    }
}

function f2() { 
    // on affiche l'objet person dans la console, vu dans le cours slide 39
    console.log(person);
}  

function f3() {
    // Ici, on utilise boucle for, vu dans le cours slide 44
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i].nom+"-"+etudiants[i].prenom+"-"+etudiants[i].age);
    }   
}
