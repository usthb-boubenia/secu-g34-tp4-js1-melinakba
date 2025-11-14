"use strict"; // vu au slide 51

// Tableau vu au slide 38
const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

// Objet vu au slide 39
const objetEtudiant = { nom: "John", prenom: "DOE", age: 30 };

// Tableau d’objets vu au slide 40
const tableauObjets = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

//fonctions simples vu au slide 45
function f1() {
   // Boucle for vue au slide 44
  for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]);
  }
}

function f2() {
  console.log(objetEtudiant);
}

function f3() {
  // Boucle for vue au slide 44
  for (let i = 0; i < tableauObjets.length; i++) {
    const e = tableauObjets[i];
    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  }
}

// Retrouver un element par id vu au slide 61 et les evenements slide 126
document.getElementById("b1").addEventListener("click", f1);
document.getElementById("b2").addEventListener("click", f2);
document.getElementById("b3").addEventListener("click", f3);
