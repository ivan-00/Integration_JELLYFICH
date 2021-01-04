let btnFacture      =document.getElementById('btn-factures');
let btnFiche        =document.getElementById('btn-fiche');
let btnFrais        =document.getElementById('btn-frais');
let Table           =document.getElementById('app-table');


btnFacture.addEventListener('click' ,()=> {
    fetch ('https://secure.askolga.fr/bucket/40539aa7489a95f9ea63c76a7b0d4c827128dafcd0bac7ebe163183754f0c5195fe072892f50c/search/6477e4ced7ebda88d886bc5b6b2fea24ac90df70d212df60f4cabf31b83db23d5fe1f67733d7a-show.json')
        .then (Response => Response.json())
        .then (function(data){
            Table.textContent = data.name; 
        });
});

btnFrais.addEventListener('click' ,() => {
    fetch ('https://secure.askolga.fr/bucket/40539aa7489a95f9ea63c76a7b0d4c827128dafcd0bac7ebe163183754f0c5195fe072892f50c/search/217ff136ad3c2a12ad2a022556f2712bda37f108105dc9eaa834df8b37ae17a15fe1f354b5abd-show.json')
        .then (Response => Response.json())
        .then (function(data){
            Table.textContent = data.name;
        })
})

btnFiche.addEventListener('click' ,() => {
    let name;
    fetch ('https://secure.askolga.fr/bucket/40539aa7489a95f9ea63c76a7b0d4c827128dafcd0bac7ebe163183754f0c5195fe072892f50c/search/42b6d6bf16ef570a21777f63600d6ce4543b2c795e94d005bef54b9fa500defc5fe1f62489936-show.json')
        .then (Response => Response.json())
        .then (function(data){
            Table.textContent = data.name;
        })
})
