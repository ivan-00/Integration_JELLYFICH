console.log('hello');
let entier      = randomnumber (1, 50);
let name        = document.getElementById("app-name")
let taille      = document.getElementById("app-taille")
let filme       = document.getElementById("app-filme")
let yeux        = document.getElementById("app-yeux")
let btn         = document.getElementById("app-btn"); 

btn.addEventListener('click', (a) =>{
    a.preventDefault()
    // Recuperation de donné
    fetch('https://swapi.dev/api/people/'+entier)
    .then (response => response.json())
    .then(response => window.alert (data.name + ' ' + data.height + ' ' +  data. birth_year +' ' + data.eye_color));
    // var perso = {
    //     Nom: (data.name),
    //     Taille:(data.height),
    //     Filme:(data .birth_year),
    //     Yeux:(data.eye_color),
    // }
})
// Function
function randomnumber (){
    return Math.floor(Math.random() * Math.floor(50));
};


