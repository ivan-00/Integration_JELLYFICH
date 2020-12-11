"use strict";

// Declarer des variables.
// let age =  document.getElementById('app-age');
var add = document.getElementById('add-submit');
var type = document.getElementById('add-type');
var age = document.getElementById('add-age');
var annee = document.getElementById('add-anne');
var now = 2020;
var age_test;
add.addEventListener('click', function (a) {
  a.preventDefault();
  type.className = "";
  var fin_age = now - annee.value;

  if (age.value !== '') {
    age_test = age.value;
    console.log(age_test);
  }

  if (fin_age.value !== '' && fin_age.value !== undefined) {
    age_test = fin_age.value;
    console.log(age_test);
  }

  ;

  if (annee.value === '' && age.value === '') {
    type.textContent = "Veuillez rensigner l'un des champs SVP!";
  } else if (age_test !== '') {
    if (age_test >= 6 && age_test <= 7) {
      type.textContent = "poussin";
      type.classList.add("poussin");
    } else if (age_test >= 8 && age_test <= 9) {
      type.textContent = "Pupille";
      type.classList.add("pupille");
    } else if (age_test >= 10 && age_test <= 12) {
      type.textContent = "Minim";
      type.classList.add("minim");
    } else if (age_test >= 13 && age_test <= 17) {
      type.textContent = "Cadet";
      type.classList.add("cadet");
    } else {
      type.textContent = "none";
    }
  } //  else {
  //     if (fin_age >= 6 && fin_age <= 7 ){
  //         type.textContent = "Bravo tu as " + fin_age + " ans tu es donc un Poussin";
  //         type.classList.add("Poussin");
  //     } else if (fin_age >= 8 &&  fin_age <= 9 ){
  //         type.textContent = "Bravo tu as " + fin_age + " ans. Tu es donc un Pupille";
  //         type.classList.add("pupille");
  //     } else if (fin_age >= 10 &&  fin_age < 12 ){
  //         type.textContent = "Bravo tu as " + fin_age + " ans. Tu es donc un Minim";
  //         type.classList.add("minim");
  //     } else if (fin_age >= 12 &&  fin_age <= 17){
  //         type.textContent = "Bravo tu as " + fin_age + " ans. Tu es donc un Cadet";
  //         type.classList.add("cadet");
  //     } else if (fin_age < 7 || fin_age >= 18 ){
  //         type.textContent = "Vous n'avez pas l'age desolé";
  //     }
  //     console.log(fin_age);
  // }

}); // else if (age.value > 5 || age.value > 7){
//     type.textContent = "Veuillez entrer un age compris entre 6 ans et 17 ans"
//     type.classList.add ("error");
// }