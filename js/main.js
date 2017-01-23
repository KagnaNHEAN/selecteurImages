'use strict';
/*******************************Date aujourd'hui*******************************/
var d1 = new Date();
var dY = d1.getFullYear();
var dM = d1.getMonth();
var dDay = d1.getDay();
var dDate = d1.getDate();

var mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
            'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

var jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

var dateAujourdhui = document.getElementById('date');
dateAujourdhui.innerHTML = jours[dDay] + ' ' + dDate + ' ' + mois[dM] + ' ' + dY;

/*******************************Horloge****************************************/
//Je récupère les éléments concernés
var heure = document.getElementById('h');
var Etat = document.getElementById('etat');
var Pause = document.getElementById('p');
var Unpause = document.getElementById('up');
var tempsReel = setInterval(start,1000);

function start(){
  var d2 = new Date();
  heure.innerHTML = d2.toLocaleTimeString();
  Etat.innerHTML = ' activée ';
}

Pause.addEventListener('click', pause);
function pause(){
  clearInterval(tempsReel);
  Etat.innerHTML = ' désactivée ';
}

Unpause.addEventListener('click', unpause);
function unpause(){
  setInterval(start,1000);
}
//Reste à régler le 2ème click sur pause qui ne marche pas

/*******************************Sélecteur**************************************/
var photos = document.querySelectorAll('.photoList li');
var total = document.getElementById('total');
var s = document.getElementById('S');

function onClickListItems(){
  var selectedPhotos;
  this.classList.toggle('selected'); //active et désactive la class selected du <li>
  selectedPhotos = document.querySelectorAll('.photoList li.selected');
  total.textContent = selectedPhotos.length;
    if(total.textContent > 1){
      s.innerHTML = 's';
    }
    else {
        s.innerHTML = '';
    }
}

for(var index=0; index < photos.length; index++){
  photos[index].addEventListener('click', onClickListItems);
}

/*********************************Formulaire***********************************/
var prenom = document.getElementById('prenom');
var prenomM = document.getElementById('prenomManquant');
var prenomV =/^[a-zA-ZéäèîïÉÄÈÎÏ][a-zéèîïêàäç]+([-'\s][a-zA-ZéäèîïÉÄÈÎÏ][a-zéèîïêàäç]+)?/;

var validation = document.getElementById('valider');

//Ajout du click au bouton valider et vérification des données entrées par l'utilisateur


validation.addEventListener('click', fValid);
function fValid(e) {
  if(prenom.validity.valueMissing) {
      e.preventDefault();
      prenomM.textContent = 'Prénom manquant';
      prenomM.style.color = 'red';
  } else if(prenomV.test(prenom.value) == false) {
      e.preventDefault();
      prenomM.textContent = 'Format incorrecte';
      prenomM.style.color = 'red';
  } else {
      alert('Bravo, merci pour le test !!!!');
      }
}
