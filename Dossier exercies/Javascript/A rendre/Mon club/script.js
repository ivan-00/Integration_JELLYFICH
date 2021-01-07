// Declarer des variables.
// let age =  document.getElementById('app-age');
let add     = document.getElementById('add-submit');
let type    = document.getElementById('add-type');
let age     = document.getElementById('add-age');
let annee   = document.getElementById('add-anne');
let now = 2020;
let age_test;

add.addEventListener ('click' ,(a) => {
    a.preventDefault();
    type.className = "";
    let fin_age = (now) - (annee.value);

    if (age.value !== ''){
        age_test = age.value
        console.log(age_test);
    }

    if (fin_age.value !== '' && fin_age.value !== undefined ){
        age_test = fin_age.value
        console.log(age_test);
    };
    
    if (annee.value === '' && age.value === ''){
        type.textContent = "Veuillez rensigner l'un des champs SVP!";
    } else if (age_test !== ''){
        if (age_test >= 6 && age_test <= 7){
            type.textContent = "poussin"; 
            type.classList.add("poussin");
        } else if (age_test >= 8 &&  age_test <= 9 ){
            type.textContent = "Pupille";
            type.classList.add("pupille");
        } else if (age_test >= 10 &&  age_test <= 12 ){
            type.textContent = "Minim";
            type.classList.add("minim");
        } else if (age_test >= 13 &&  age_test <= 17 ){
            type.textContent = "Cadet";
            type.classList.add("cadet");
        }
        else {
            type.textContent = "none";
        }

    }
})
