/*
 * 1. L'utilisateur tape un nombre dans chaque input
 * 2. Chaque fois que l'on tape au clavier dans l'un des deux input
 *    et si les deux inputs sont remplis, on additionne les deux nombres
 *    et on affiche le résultat dans #result
 */
let input1      = document.getElementById('input1');
let input2      = document.getElementById('input2');
let result      = document.getElementById('result');

input1.addEventListener ('keyup' , (a)=>{
    a.preventDefault();
        input1.value;
        input2.value;
let add = Number(input1.value) + Number(input2.value);
result.textContent = 'Le resultat est ' + add;
if (input1.value != '' || input2.value != '' ){
    result.textContent = "Veuillez remplir les 2 chmaps s'il vous plait"
}
});
input2.addEventListener ('keyup' , (a)=>{
    a.preventDefault();
        input1.value;
        input2.value;
        if (input1.value != '' || input2.value != ''){
            result.textContent = "Veuillez remplir les 2 chmaps s'il vous plait"
        }
let add = Number(input1.value) + Number(input2.value);
result.textContent = 'Le resultat est ' + add;
});

