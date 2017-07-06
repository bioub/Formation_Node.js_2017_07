'use strict';

// 1 - Utiliser les Method Properties
const Random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
};

// 1bis - N'utiliser que let et const (de préférence const)
const readline = require('readline');

// 2 - Utiliser le mot clé class
class Jeu {
  constructor(options = {}) {
    // 3 - Utiliser un default params
    // options = options || {};

    // 4 - Destructurer options
    const {min = 0, max = 100} = options;
    //const min = options.min || 0;
    //const max = (options.max !== undefined) ? options.max : 100;
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this._entierAlea = Random.getIntInclusive(min, max);
    this._essais = [];
  }

  jouer() {

    if (this._essais.length) {
      // 5 - Utiliser une template string
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
    }

    this._rl.question('Saisir un nombre entier : ', (saisie) => {

      // 6 - Utiliser Number.parseInt
      // et Number.isNaN
      const entierSaisi = Number.parseInt(saisie);

      if (Number.isNaN(entierSaisi)) {
        console.log('Erreur : il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        // 5 - Utiliser une template string
        console.log(`${entierSaisi} est trop petit`);
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        // 5 - Utiliser une template string
        console.log(`${entierSaisi} est trop grand`);
        return this.jouer();
      }

      console.log('Gagné !!!');
      this._rl.close();
    });

  }
}

const jeu = new Jeu();
jeu.jouer();
