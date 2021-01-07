"use strict";

console.log('hello');
var entier = randomnumber(1, 50);
var name = document.getElementById("app-name");
var taille = document.getElementById("app-taille");
var filme = document.getElementById("app-filme");
var yeux = document.getElementById("app-yeux");
var btn = document.getElementById("app-btn");
btn.addEventListener('click', function (a) {
  a.preventDefault(); // Recuperation de donné

  fetch('https://swapi.dev/api/people/' + entier).then(function (response) {
    return response.json();
  }).then(function (response) {
    return window.alert(data.name + ' ' + data.height + ' ' + data.birth_year + ' ' + data.eye_color);
  }); // var perso = {
  //     Nom: (data.name),
  //     Taille:(data.height),
  //     Filme:(data .birth_year),
  //     Yeux:(data.eye_color),
  // }
}); // Function

function randomnumber() {
  return Math.floor(Math.random() * Math.floor(50));
}

;