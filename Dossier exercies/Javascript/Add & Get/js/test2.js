/*
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK
 * 2. A la soumission du formulaire, on additionne les deux nombres
 *    Et on affiche le résultat dans #result
 */
let input1      = document.getElementById('input1');
let input2      = document.getElementById('input2');
let button      = document.getElementById('button');
let result      = document.getElementById('result');

// Function 
button.addEventListener('click' , (e) => {
    e.preventDefault();
    let     = input1.value;
    let     = input2.value;
    let add = Number(input2.value) + Number(input1.value);
    console.log(add);
    // let result  = document.getan ;
    result.textContent = 'Le resultat est ' + add;    
})



