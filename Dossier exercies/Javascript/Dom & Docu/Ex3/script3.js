console.log('hello');
// Ellement a recuperer.

let btn         = document.getElementById('app-btn')
let field       = document.getElementById('app-field') 
let listItems   = document.getElementById('app-listItems')

// On gère l'evt.
btn.addEventListener('click', () =>{
    // on ajoute la valeur field dans la listItems
    // On recupere la valeur du champs de saisi
    let text = field.value;
        // on regarde si on a bien saisi qq chose 
    if(text.length === 0){
        console.error("merci de saisir qql chose");
        return;
    }
    // On cree un li avec le contenu
    let li = document.createElement('li');
    li.textContent = text;
    // On ajoute le text dans la liste
    listItems.appendChild(li);
    console.log(li);
    field.value = '';
    // console.log (text)
})
