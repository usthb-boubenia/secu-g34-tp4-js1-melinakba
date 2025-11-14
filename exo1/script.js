"use strict"; // vu au slide 51

//declaration de variables de type primitif vu au slide 37
const prenom = "John";
const nom = "Doe";
const age = 38;
const note = 15;
const pi = 3.14;

//fonctions simples vu au slide 45
function f1() { 
  console.log(nom);
}

function f2() { 
  console.log(prenom);
}

function f3() { 
  console.log(nom + "-" + prenom);
}

function f4() { 
  console.log(age);
}

function f5() { 
  console.log(note);
}

function f6() { 
  console.log(pi);
}

//retrouver un element par id vu au slide 61 et les evenements slide 126
document.getElementById("b1").addEventListener("click", f1);
document.getElementById("b2").addEventListener("click", f2);
document.getElementById("b3").addEventListener("click", f3);
document.getElementById("b4").addEventListener("click", f4);
document.getElementById("b5").addEventListener("click", f5);
document.getElementById("b6").addEventListener("click", f6);
