console.log("hello");

let nbclick = 0
// on crée l'évenement.
// addListener
// on ecoute le click sur le document et on lance la fonction.
document.addEventListener('click', () => {
    // apres => à la fonction appélé.
    // On fait quelque chose.
    // on incrémente la valeur de la variable nbClick
    nbclick++;
    // On affiche la valeur de la variable click
    console.log(nbclick);
})