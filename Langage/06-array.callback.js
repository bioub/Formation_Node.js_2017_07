// Callback synchrones sur Array
// qui implémente la programmation fonctionnelle
// (le callback remplace un algo)

var prenoms = ['Jean', 'Pierre', 'Eric'];

console.log('-- forEach (boucle for) - ES5 --');
prenoms.forEach(function(prenom, i, array) {
  console.log(prenom, i);
});

console.log('-- filter - ES5 --');
var prenomsFiltrees = prenoms.filter(function(prenom, i, array) {
  return prenom.length === 4;
});

prenomsFiltrees.forEach(function(prenom, i, array) {
  console.log(prenom, i);
});

console.log('-- filter chainé + arrow function (ES6) --');
prenoms
  .filter(prenom => prenom.length === 4)
  .forEach((prenom, i) => console.log(prenom, i));

console.log('-- map (transformation) --');
var contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  adresse: {
    ville: 'Lyon',
    codePostal: '69001',
  }
}, {
  prenom: 'Eric',
  nom: 'Martin',
  adresse: {
    ville: 'Lyon',
    codePostal: '69003',
  }
}, {
  prenom: 'Pierre',
  nom: 'Durand',
  adresse: {
    ville: 'Paris',
    codePostal: '75012',
  }
}];
var prenomsDepuisContacts = contacts.map(c => c.prenom);
console.log(prenomsDepuisContacts.join(', '));

console.log('-- find (ES6) --');
var eric = contacts.find(c => c.prenom === 'Eric');
console.log(eric);

console.log('-- findIndex (ES6) --');
var iEric = contacts.findIndex(c => c.prenom === 'Eric');
console.log(iEric); // 1

console.log('-- indexOf (ES1) --');
var iEric = contacts.indexOf(eric);
console.log(iEric); // 1 (trouvé, le même objet)
var iEric = contacts.indexOf({
  prenom: 'Eric',
  nom: 'Martin',
  adresse: {
    ville: 'Lyon',
    codePostal: '69003',
  }
});
console.log(iEric); // -1 (pas trouvé, pas le même objet)

console.log('-- sort --');
var prenomsTries = prenoms.sort();
console.log(prenomsTries.join(', '));

console.log('-- sort avec comparaison (ES5) --');
var contactsTries = contacts.sort((c1, c2) => {
  if (c1.prenom < c2.prenom) {
    return -1;
  }
  if (c1.prenom > c2.prenom) {
    return 1;
  }
  return 0;
});
console.log(contactsTries);

console.log('-- reduce --');
var totalCharPrenoms = prenoms.reduce((acc, p) => acc + p.length, 0);
// acc: 0, prenom: 'Jean', return 4
// acc: 4, prenom: 'Pierre', return 10
// acc: 10, prenom: 'Eric', return 14
console.log(totalCharPrenoms); // 14
var total = [1, 2, 3, 4].reduceRight((acc, nb) => acc + nb);
console.log(total); // 10

// Exercice :
// Avec les fonctions vues précédemment
// 1 - Créer un tableaux de villes à partir de contacts
// 2 - Dédoublonner ce tableau
console.log('-- exercice --');
contacts
  .map(c => c.adresse.ville)
  .reduce((acc, v) => {
    if (!acc.includes(v)) {
      acc.push(v);
    }
    return acc;
  }, [])
  .sort()
  .forEach(ville => console.log(ville));






