/*
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boite de dialogue
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boite de dialogue
 * 3. Additionner les deux nombres
 * 4. Afficher le résultat dans #container
 */

let number = window.prompt ("entrer un nombre");
let number2 = window.prompt("entrer le deuxieme nombre ");
let result = (Number(number) + Number(number2));
console.log(result);
let container = document.getElementById("container")
// window.alert( number "+ " number2 " est égale a " result);
// window.alert(number + " + "  + number2 +  " est égale à  " + result);
container.textContent = (number + " + "  + number2 +  " est égale à  " + result);