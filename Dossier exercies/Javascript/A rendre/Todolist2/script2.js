
// Créez un bouton "Fermer" et ajoutez-le à chaque élément de la liste.
let listItems = document.getElementsByTagName ("li");
var i = 0;
for (i < listItems.length; i++;) {
    let trash = document.createElement ("i");
    trash.classList.add("fa");
    trash.classList.add("fa-trash");
    trash.className = "close";
    li.appenChild(trash);
    listItems[i].appendChild (trash);
};

// Cliquez sur un bouton de fermeture pour masquer l'élément de liste actuel.
let newElement = document.getElementsByClassName ("fa-trash");
let trash = document.getElementById("app-trash");

console.log(trash);