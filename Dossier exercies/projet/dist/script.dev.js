"use strict";

var btnFacture = document.getElementById('btn-factures');
var btnFiche = document.getElementById('btn-fiche');
var btnFrais = document.getElementById('btn-frais');
var table = document.getElementById('app-table');
var compt = document.getElementById('app-compt'); // Url

var urlFacture = 'https://secure.askolga.fr/bucket/40539aa7489a95f9ea63c76a7b0d4c827128dafcd0bac7ebe163183754f0c5195fe072892f50c/search/6477e4ced7ebda88d886bc5b6b2fea24ac90df70d212df60f4cabf31b83db23d5fe1f67733d7a-show.json';
var urlFrais = 'https://secure.askolga.fr/bucket/40539aa7489a95f9ea63c76a7b0d4c827128dafcd0bac7ebe163183754f0c5195fe072892f50c/search/217ff136ad3c2a12ad2a022556f2712bda37f108105dc9eaa834df8b37ae17a15fe1f354b5abd-show.json';
var urlFiche = 'https://secure.askolga.fr/bucket/40539aa7489a95f9ea63c76a7b0d4c827128dafcd0bac7ebe163183754f0c5195fe072892f50c/search/42b6d6bf16ef570a21777f63600d6ce4543b2c795e94d005bef54b9fa500defc5fe1f62489936-show.json'; // End Url

function sectionButton(btn) {
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove("selection");
  }

  btn.classLista.add("selection");
}

;

function selectionUrl(url, btn) {
  var compteur = 0;
  btn;
  fetch(url).then(function (reponse) {
    return reponse.json();
  }).then(function (data) {
    var allFiles = data.documents;

    for (var i in allFiles) {
      if (compteur % 2 == 0) {
        table.innerHTML += "<div class='list_document'>" + allFiles[i].filename + "</div>";
      }

      compteur++;
    }

    if (compteur <= 0) {
      compt.textContent = "auncun document trouvé";
    } else if (compteur == 1) {
      compt.textContent = compteur + ' document trouvé';
    } else {
      compt.textContent = compteur + ' documents trouvés';
    }
  });
}

function selectionBtn(e) {
  e.preventDefault();

  if (this == btnFacture) {
    selectionUrl(urlFacture);
  } else if (this == btnFrais) {
    selectionUrl(urlFrais);
  } else {
    selectionUrl(urlFiche);
  }
}

btnFacture.addEventListener('click', function (e) {
  e.preventDefault();
  selectionUrl(urlFacture);
  table.innerHTML = '';
});
btnFiche.addEventListener('click', function () {
  selectionUrl(urlFiche);
  console.log(selectionBtn);
  table.innerHTML = '';
});
btnFrais.addEventListener('click', function () {
  selectionUrl(urlFrais);
  console.log(selectionBtn);
  table.innerHTML = '';
}); // btnFacture.addEventListener('click' ,()=> {
//     fetch ('https://secure.askolga.fr/bucket/40539aa7489a95f9ea63c76a7b0d4c827128dafcd0bac7ebe163183754f0c5195fe072892f50c/search/6477e4ced7ebda88d886bc5b6b2fea24ac90df70d212df60f4cabf31b83db23d5fe1f67733d7a-show.json')
//         .then (Response => Response.json())
//         .then (function(data){
//             let allFiles = data.documents;
//             let compteur = 0;
//             table.innerHTML = "";
//                 for (let i in allFiles){
//                     if (compteur % 2 == 0){
//                         table.innerHTML += "<div class='number_document'>"+ allFiles[i].filename + "</div>";
//                     }
//                     console.log(data.allFiles);
//                 };
//         });
// });
// btnFrais.addEventListener('click' ,() => {
//     fetch ('https://secure.askolga.fr/bucket/40539aa7489a95f9ea63c76a7b0d4c827128dafcd0bac7ebe163183754f0c5195fe072892f50c/search/217ff136ad3c2a12ad2a022556f2712bda37f108105dc9eaa834df8b37ae17a15fe1f354b5abd-show.json')
//         .then (Response => Response.json())
//         .then (function(data){
//             console.log (data.documents);
//             let allFiles = data.documents
//                 for (let i in allFiles);       
//         })
// })
// btnFiche.addEventListener('click' ,() => {
//     let name;
//     fetch ('https://secure.askolga.fr/bucket/40539aa7489a95f9ea63c76a7b0d4c827128dafcd0bac7ebe163183754f0c5195fe072892f50c/search/42b6d6bf16ef570a21777f63600d6ce4543b2c795e94d005bef54b9fa500defc5fe1f62489936-show.json')
//         .then (Response => Response.json())
//         .then (function(data){
//             table.textContent = data.documents;
//             console.log (data.documents);
//             let allFiles = data.documents
//                 for (let i in allFiles);        
//         })
// })