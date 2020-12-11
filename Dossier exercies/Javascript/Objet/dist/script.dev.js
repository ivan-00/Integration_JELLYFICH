"use strict";

// Un objet peut contenir
// - des propriete (donnes) de tous type de meme objet
// - des methodes (fonctions)
// - des 
console.log("hello");
var monObjet = {
  uneValeur: 5,
  uneString: 'Une chaine de caractère',
  unTableau: [1, 2, 6, 86]
};
console.log(monObjet);
var etudiant1 = {
  nom: 'luca',
  age: '25',
  adresse: {
    cp: '94130',
    ville: 'Nogent'
  },
  notes: [12, 17, 10, 9, 11],
  hello: function hello(name) {
    console.log('hello' + name);
  }
};
console.log(etudiant1);
console.log(etudiant1.adresse.cp);
console.log(etudiant1.age);