"use strict";

// Créez un bouton "Fermer" et ajoutez-le à chaque élément de la liste.
var listItems = document.getElementsByTagName("li");
var i = 0;

for (i < listItems.length; i++;) {
  var _trash = document.createElement("i");

  _trash.classList.add("fa");

  _trash.classList.add("fa-trash");

  _trash.className = "close";
  li.appenChild(_trash);
  listItems[i].appendChild(_trash);
}

; // Cliquez sur un bouton de fermeture pour masquer l'élément de liste actuel.

var newElement = document.getElementsByClassName("fa-trash");
var trash = document.getElementById("app-trash");
console.log(trash);