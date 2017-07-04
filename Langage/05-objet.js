// En JS on manipule beaucoup d'objet existants
console.log(typeof Math); // object (Language)
console.log(typeof console); // object (Node.js & Browser)
console.log(typeof process); // object (Node.js)
console.log(typeof document); // undefined (Browser)

// Un objet JS est extensible
console.log(Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(Math.sum); // function
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum); // function
delete Math.sum;
console.log(Math.sum); // undefined

// Pour accéder au contenu d'un objet on peut utiliser
// l'opérateur .
console.log(Math.PI);

// Ou alors l'opérateur [] (plus lourd mais plus dynamique)
console['log'](Math['PI']);

// Si besoin ponctuel d'un objet (ou si objet simple à créer)
// On utilise la syntaxe object literal
var coords = {
  x: 1,
  y: 2,
};
coords.z = 3;
console.log(typeof coords); // object

// On peut boucler sur les clés d'un objet
for (var key in coords) {
  console.log(key);
  console.log(coords[key]);
}

console.log(Object.keys(coords)); // ES5.1
console.log(Object.values(coords)); // ES8

var contact = {
  prenom: 'Romain',
  hello: function() {
    return 'Hello my name is ' + this.prenom;
  }
};
console.log(contact.hello('Toto')); // Hello my name is Romain

/*
 var createButton = function(label, hauteur, largeur, couleurFond, couleurBordure) {
    var btnElt = document.createElement('button');
    btnElt.innerText = label;
    btnElt.addEventListener('click', function onClick() {
      console.log(label);
    });
    return btnElt;
 };

 var btn = createButton('Clic moi', false, false, false, 'yellow');

 var createButton = function(options) {
    var btnElt = document.createElement('button');
    btnElt.innerText = options.label;
    btnElt.addEventListener('click', function onClick() {
      console.log(label);
    });
    return btnElt;

 };

 var btn = createButton({
  label: 'Clic moi',
  couleurBordure: 'yellow'
 });
 */

// Si besoin récurrent on utilise une fonction constructeur

// Avec une closure (mauvaise pratique)
var VoitureAvecClosure = function(marque, modele) {
  //this.marque = marque;
  if (modele.length > 10) {
    this.modele = modele;
  }
  this.getMarque = function() {
    return marque;
  };
};

var clio = new VoitureAvecClosure('Renault', 'Clio');
console.log(typeof clio); // object
console.log(typeof VoitureAvecClosure); // function
console.log(clio.marque); // undefined
console.log(clio.getMarque()); // Renault
var p208 = new VoitureAvecClosure('Peugeot', '208');
console.log(clio.getMarque === p208.getMarque); // false

// Function Constructeur + Prototype (bonne pratique)
var VoitureAvecPrototype = function(marque, modele) {
  this._marque = marque;
  this._modele = modele;
};

VoitureAvecPrototype.getClass = function() {
  return 'VoitureAvecPrototype';
};

VoitureAvecPrototype.prototype.getMarque = function() {
  return this._marque;
};

var twingo = new VoitureAvecPrototype('Renault', 'Twingo');
var c3 = new VoitureAvecPrototype('Citroen', 'C3');
console.log(VoitureAvecPrototype.getClass()); // VoitureAvecPrototype
console.log(twingo.getMarque()); // Renault
