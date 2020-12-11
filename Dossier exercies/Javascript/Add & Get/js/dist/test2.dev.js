"use strict";

/*
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK
 * 2. A la soumission du formulaire, on additionne les deux nombres
 *    Et on affiche le résultat dans #result
 */
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var button = document.getElementById('button');
var result = document.getElementById('result'); // result = (Number(valeur1) + Number(valeur2));
// console.log(result);

button.addEventListener("click", function (e) {
  e.preventDefault();
  var valeur1 = input1.value;
  var valeur2 = input2.value;
  total = Number(valeur1) + Number(valeur2);
  result.textContent = total;
});