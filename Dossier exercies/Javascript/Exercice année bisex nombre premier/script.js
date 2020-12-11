// Afin de jouer avec les opérateurs, et notamment l'opérateur modulo, voici un exercice assez classique : déterminer si une année est bissextile.
// Pour rappel, une année est bissextile si elle est divisible par 4 sans être divisible par 100 ou si elle est divisible par 400 (cf. Wikipedia).
// Pour second rappel, l'opérateur modulo (%) permet d'obtenir le reste d'une division. Si le reste vaut 0, c'est que la division est complète : if (8 % 2) { alert("8 est divisible par 2"): }.

// Exercie Bissextile
// let year;
// year = window.prompt ('entrer une année pour savoir si elle est bissextile.')
// console.log(year);

// if (( year % 4 === 0 && year % 100 > 0) || (year % 400 === 0)){
//     window.alert (`${year} est pas une année bissextile`);
//     console.log(year);
// }  else {
//     window.alert (`${year} n'est pas une année bissextile.`);
// };
//              END

            // Start
// Maintenant que vous êtes des as du modulo, essayons quelque chose de plus complexe, qui vous sera utile lors du TP à la fin de la première partie.
// On reçoit un nombre, par exemple var number = 42;. Comment savoir de combien de dizaines (4) et de combien d'unités (2) est composé ce nombre ? Avec l'opérateur modulo !
// Pour savoir combien d'unités sont contenues dans 42, il suffit de faire 42 % 10, ce qui donne 2. Il ne vous reste plus qu'à trouver comment obtenir le nombre de dizaines. Ce sont des maths...

// let nbr = Number ;
// nbr = window.prompt ("entrer un nombre");
// let unite = nbr % 10;
// let dizaine = (nbr - unite) / 10;

// console.log(nbr);
// console.log(dizaine);
// console.log(unite);
// // window.alert ( nbr " est composé de"  dizaine  " et de"  unite " d'unité");
// window.alert ( nbr + ' est composé de ' + dizaine + ' dizaine ' + ' et de '+ unite + ' Unités. ');
                    // END

                    // Start
// Ecrivez une boucle while qui se répète tant que l'utilisateur n'a pas entré une valeur correcte via prompt(). En d'autres mots, prompt() s'affiche à chaque exécution de la boucle. Si l'utilisateur entre quelque chose, la boucle s'arrête, et une alert() affiche la valeur entrée dans le prompt(). Si l'utilisateur clic sur Annuler ou ne rentre pas de texte, la boucle continue et réaffiche une nouvelle prompt().
// let nbrMyster = 25 ; 
// let nbrJoueur = Number; 

// nbrJoueur = window.prompt (" entrer un chiffre entre 20 et 25")
// while ((nbrJoueur > 25)||(nbrJoueur < 20)){
//         prompt ("Ton chiffre doit etre compris entre 20 et 25")
//         break
//     }
    // else{
    //     window.alert (" Vous avez trouvé")
    // }
// while (nbrJoueur == nbrJoueur) {
//     nbrJoueur++
// }

    // end 
    // Start

    // Comennt savoir si le var est nombre premier.
let nbr = Number;

nbr = window.prompt("Entrer un chiffre pour savoir si il est premier.");
console.log(nbr);
// console.log(nbrPremier);
function estPremier(nbrPremier) {
    nbr %2 === 0
}
if (nbr %2 === 0){
    window.alert("ton chiffre est premier")
} else {
    window.alert ("ton chiffre est pas premier")
};

// Exercie for 
// var eleves = [{
//     nom: 'Marc',
//     moyenne: 15
// }, {
//     nom: 'Marion',
//     moyenne: 8
// }, {
//     nom: 'Antoine',
//     moyenne: 4
// }]

// for (let i = 0; i < eleves.length; i++) {
//     var eleve = eleves[i];
//     if (eleve.moyenne < 10) {
//         console.log(eleve.nom + " n'a pas la moyenne");
//     }
// }


