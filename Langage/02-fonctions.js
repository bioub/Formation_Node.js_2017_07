// 1 - Quatre façons de déclarer une fonction

// Function declaration
function sum(a, b) {
  return a + b;
}

// Anonymous function expression
var sum = function(a, b) {
  return a + b;
};

// Named function expression
var sum = function sum(a, b) {
  return a + b;
};

// Arrow function
var sum = (a, b) => a + b;

// 2 - Paramètres
/**
 * Additionne 2 paramètres
 * @param {number|string} a Le 1er nombre
 * @param {number|string} b Le 2e nombre
 * @returns {number} La somme
 */
var addition = function(a, b) {
  return a + b;
};

console.log(addition(1, 2)); // 3
console.log(addition('1', '2')); // '12'
console.log(addition(true, true)); // 2
console.log(addition(1, 2, 3, 4)); // 3
console.log(addition(1)); // NaN

// Passage par référence (une fonction est un objet)
var autreAddition = addition;
console.log(autreAddition(1, 2)); // 3

// Gestion des erreurs dans une fonction
var addition = function(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Les 2 params doivent être de type number');
  }
  return a + b;
};

console.log(addition(1, 2)); // 3

try {
  console.log(addition(1, '2')); // 3
}
catch (err) {
  console.log(err.message);
}

// Fonction variadique
var addition = function(a, b) {
  var somme = a + b;

  for (var i=2; i<arguments.length; i++) {
    somme += arguments[i];
  }

  return somme;
};

console.log(addition(1, 2, 3, 4)); // 10

// Avec le REST param (ES6)
var addition = (...nbs) => nbs.reduce((a, b) => a + b);
console.log(addition(1, 2, 3, 4)); // 10

// Valeur par défaut
var sum = function sum(a, b) {
  if (b === undefined) {
    b = 0;
  }

  return a + b;
};
console.log(addition(1)); // 1

// Valeur par défaut (possible que si la valeur par défaut
// est équivalent à false)
var sum = function sum(a, b) {
  b = b || 0;

  return a + b;
};
console.log(addition(1)); // 1

// En ES6 (default param)
var sum = function sum(a, b = 0) {
  return a + b;
};
console.log(addition(1)); // 1
