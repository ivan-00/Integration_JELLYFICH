
console.log("Hello world");

/*
Le gendarme demande à l'utilisateur son âge et si il a le permis de conduire ?
Le gendarme décide si l'utilisateur à le droit de conduire ?
*/

let age;
let message;

// pour récupérer la saisie de l'utilisateur
// la fonction prompt ==> pose la question qui est dans les ()
// le résultat === la saisie de l'utilisateur est renvoyé par la fonction
// je le "récupère" dans une variable pour pouvoir l'utiliser ensuite 
age = window.prompt("Bonjour, quel âge avez vous ?");

// ... traitement qui décide ce que vaut message

// "si je suis majeur et que j'ai le permis", alors :
if(age >= 18) {
    // "droit de conduire"
    if (window.prompt("Vous avez l'âge autorisé pour conduire mais avez vous le permis oui/non?") == "oui") {
        message = "C'est bon vous pouvez circuler !";
    } else {
        message = "Descendez du véhicule s'il vous plaît, vous n'avez pas le droit de conduire sans permis !";
    }
}
// sinon si age >= 16 && hasLicence === false
// sinon si age >= 16 && hasLicence !== true
// sinon si age >= 16 && !hasLicence
else if (age >= 16 && age < 18) {
  message = "Vous êtes seulement autorisé à conduire accompagné";
}

else {
  // "pas le droit de conduire"
  message = "Descendez du véhicule s'il vous plaît, vous êtes en infraction !";
}

// On afficher toujours un message quelque soit la condition
window.alert(message);
