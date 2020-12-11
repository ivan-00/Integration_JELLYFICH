console.log("");
addEventListener ("click", () => {
})
// Deffinir une variable du boutton.
let btnYes = document.getElementById("btnYes");
console.log(btnYes);
let btnNo = document.getElementById("btnNo");
console.log(btnNo)
let cptYes = 0;
let cptNo = 0
// Fonction

btnYes.addEventListener("click", () =>{
    // On incrémente
    cptYes++;
    // On affiche
    btnYes.innerHTML = `OUI (${cptYes})`;  `texte($ {var})`
    console.log("click btnYes : " +cptYes);
})

            

btnNo.addEventListener("click", () =>{
    // On incrémente
    cptNo++;
    // On affiche
    btnNo.innerHTML = `NON (${cptNo})`;
    console.log("click btnNo : " +cptNo);
})
// je lance la fonction.
