console.log("helloword");

// Element à recuprer.

let btnAd       = document.getElementById("app-btnAd");
let btnSuppAll  = document.getElementById("app-btnSuppAll");
let field       = document.getElementById("app-field");
let listItems   = document.getElementById("app-listItems");
let li          = document.getElementById("app-li");

// 
let text        = field.value;
// End

// On gère l'evt.
    // btnAd
btnAd.addEventListener('click', () =>{
    // On ajoute la valeur field dans le listitems
    let text = field.value;
    if(text.length ===0){
        window.alert("merci de saisir un produit");
        return;
    }
    // On cree un li avec le contenu =value
    li      = document.createElement('li');
    btnSup  = document.createElement('button');
    btnSup.classList.add('fa-trash');
    btnSup.classList.add('fa');
    li.textContent = text;

    // On l'ajoute a la liste.
    listItems.appendChild(li);
    li.appendChild(btnSup);
    // On supprime la valeur value.
    field.valu = '';
})

// Trash 
btnSup = document.getElementById ("app-btnSupp");
btnSup.addEventListener("click",() =>{
    btnSup++
    // on supprime lisitem
        console.log(btnSup);
})


// Quand on clique sur supprimer le ul se vide
//     // btnSuppAll
// btnSuppAll.addEventListener("click",() =>{
//     console.log(btnSuppAll);
//     listItems.removeChild()
//     console.log(li);
// })

