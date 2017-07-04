// 1 - Avec la syntaxe object literal
// Créer un objet Random
// Tel qu'on puisse appelé les fonctions comme ceci :
// var entierAlea = Random.getIntInclusive(0, 100);

// 2 - Créer une fonction constructeur Jeu
// et placer la fonction jouer dans son prototype
// Tel qu'on puisse écrire :
// var jeu = new Jeu();
// jeu.jouer();

// 3 - Ajouter en param d'entrée de Jeu un objet options
// avec une clé min et une clé max (qui par défaut receveront 0 et 100)
// Tel qu'on puisse écrire :
// var jeu = new Jeu({
//   min: 10,
//   max: 20,
// });
// jeu.jouer();


function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var entierAlea = getRandomIntInclusive(0, 100);
var essais = [];

var jouer = function() {

  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Saisir un nombre entier : ', (saisie) => {

    var entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log(entierSaisi + ' est trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log(entierSaisi + ' est trop grand');
      return jouer();
    }

    console.log('Gagné !!!');
    rl.close();
  });

};

jouer();
