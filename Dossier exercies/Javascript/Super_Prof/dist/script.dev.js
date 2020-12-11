"use strict";

var tableau1 = [10, 3, 4, 5, 8, 1, 2];
var tableau2 = [];
var Tableau3 = [10, 10, 10, 10, 10, 10];
var tableau4 = [];

function printTab(tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }

  ;
} // Quand on apl fillTab > passer un tableau en (param).
// var reste dans la fonction et inversement.


function fillTab(tab, longueur) {
  for (var i = 0; i < longueur; i++) {
    var nbrUse = window.prompt("entrer une nombre");
    tab[i] = parseInt(nbrUse);
  } // console.log(tab);


  return tab;
}

function addTab(tab) {
  var add = 0;

  for (var i = 0; i < tab.length; i++) {
    add = add + tab[i]; // tour 0 : add = 0 + 10 = 10
    // tour 1 : add = 10 + 10 = 20
  }

  return add;
} // printTab (tableau); Exercice 1;
// tableau2 = fillTab (tableau2);
// console.log(tableau2);
// Exercice 2;
// let result = addTab(Tableau3);
// console.log(result);


tableau4 = fillTab(tableau4, 4);
var result = addTab(tableau4);
window.alert(result);