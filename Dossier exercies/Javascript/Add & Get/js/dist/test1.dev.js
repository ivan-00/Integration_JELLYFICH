"use strict";

/*
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boite de dialogue
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boite de dialogue
 * 3. Additionner les deux nombres
 * 4. Afficher le résultat dans #container
 */
var number = window.prompt("entrer un nombre");
var number2 = window.prompt("entrer le deuxieme nombre ");
var result = Number(number) + Number(number2);
console.log(result);