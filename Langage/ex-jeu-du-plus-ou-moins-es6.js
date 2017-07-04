// 1 - Utiliser les Method Properties
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

// 1bis - N'utiliser que let et const (de préférence const)
var readline = require('readline');

// 2 - Utiliser le mot clé class
var Jeu = function(options) {
  // 3 - Utiliser un default params
  options = options || {};

  // 4 - Destructurer options
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
    // 5 - Utiliser une template string
    console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
  }

  this._rl.question('Saisir un nombre entier : ', (saisie) => {

    // 6 - Utiliser Number.parseInt
    // et Number.isNaN
    var entierSaisi = parseInt(saisie);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      // 5 - Utiliser une template string
      console.log(entierSaisi + ' est trop petit');
      return this.jouer();
    }

    if (entierSaisi > this._entierAlea) {
      // 5 - Utiliser une template string
      console.log(entierSaisi + ' est trop grand');
      return this.jouer();
    }

    console.log('Gagné !!!');
    this._rl.close();
  });

};

var jeu = new Jeu();
jeu.jouer();
