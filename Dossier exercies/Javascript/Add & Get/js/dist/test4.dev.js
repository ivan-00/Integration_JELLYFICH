"use strict";

/*
 * 1. Dans #container, affiche l'heure à la seconde près.
 *    Sous le format : 11h 12m 06s
 * 2. Chaque seconde, l'heure doit être actualisée
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */
var container = document.getElementById('container'); // Configuration.

var date = new Date();
var annee = date.getFullYear();
var mois = new Array('Janvier', 'février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre');