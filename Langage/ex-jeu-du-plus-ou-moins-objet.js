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

var Random = {
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
};


var readline = require('readline');

var Jeu = function(options) {
  options = options || {};
  var min = options.min || 0;
  var max = (options.max !== undefined) ? options.max : 100;
  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  this._entierAlea = Random.getIntInclusive(min, max);
  this._essais = [];
};

Jeu.prototype.jouer = function () {

  if (this._essais.length) {
    console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
  }

  this._rl.question('Saisir un nombre entier : ', (saisie) => {

    var entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log(entierSaisi + ' est trop petit');
      return this.jouer();
    }

    if (entierSaisi > this._entierAlea) {
      console.log(entierSaisi + ' est trop grand');
      return this.jouer();
    }

    console.log('Gagné !!!');
    this._rl.close();
  });

};

var jeu = new Jeu();
jeu.jouer();
