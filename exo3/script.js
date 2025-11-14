"use strict"; // vu au slide 51

// Tableau vu au slide 38
const Students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

// Fonctions simples vu au slide 45
function B(note) {
  return note >= 10; // Operateur de condition vu au slide 41
}

function A() {
  // Boucle forEach vue slide 44
  Students.forEach(s => {
    const id = s[0];
    const note = s[3];
    const result = B(note);

    if (result === true) {
      console.log(id + ": ADMIS");
    } else {
      console.log(id + ": AJOURNE");
    }
  });
}

// Retrouver un element par id vu au slide 61 et les evenements slide 126
document.getElementById("b1").addEventListener("click", A);
