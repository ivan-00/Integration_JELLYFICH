"use strict";

console.log("hello word");
var message; // Au chargement de la page

var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber); // On demande au joueur de rentrer un entier dans une boite de dialogue.

var nbrJoueur = 0;
var compt = 0;
console.log(randomNumber); // Tant qu'on a n' pas reussi , on demande au joueur de rentrer un entier dans une boite de dialogue.

while (nbrJoueur != randomNumber && compt < 3) {
  // l'incrementation de compt = compt + 1;
  compt++;
  console.log("compt : " + compt); // On demande au joueur de rentrer un entier dans une boite de dialogue

  nbrJoueur = window.prompt("Entrer un nombre entre 1 et 500");
  console.log(nbrJoueur); // On indique au joueur via un popup su le nombre à trouver est plus petit ou plus grand.

  if (nbrJoueur > randomNumber) {
    // Soit c'est plus petit
    window.alert("le nombre à trouver est plus petit");
  } else if (nbrJoueur < randomNumber) {
    // Soit plus grand 
    window.alert("le nombre à trouver est plus grand");
  } else {
    window.alert("bravo vous avez trouvé");
  }
}