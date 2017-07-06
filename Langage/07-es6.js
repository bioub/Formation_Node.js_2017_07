// Avec le REST param (ES6)
const additionRest = (...nbs) => nbs.reduce((acc, nb) => acc + nb);
console.log(additionRest(1, 2, 3, 4)); // 10

// SPREAD Operator
const addition = (a, b) => a + b;
const nbs = [1, 2];
console.log(addition(...nbs));
const autreTableau = [...nbs, 3, 4];
console.log(autreTableau.join(', ')); // 1, 2, 3, 4

// Template Literal
const url = 'http://www.google.fr/';
const site = 'Google';
// var link = '<a href="' + url + '">' + site + '</a>';
const link = `<a href="${url}">${site}</a>`;

// Property Shortand
const x = 1;
const y = 2;
const coords = {
  x, y
};

// Computed Property name
let cpt = 0;
const clients = {
  [`c${++cpt}`]: 'Romain',
  [`c${++cpt}`]: 'Eric',
  [`c${++cpt}`]: 'Jean',
};
console.log(Object.keys(clients).join(', '));

// Method properties
const contact = {
  prenom: 'Romain',
  hello() {
    return 'Hello, my name is ' + this.prenom;
  }
};
console.log(contact.hello()); // Hello, my name is Romain

// Destructurer
const [a, b] = nbs;
const {x: x1, y: y1} = coords;
const options = {
  question: 'Saisir un entier compris entre 0 et 100',
  callback() {
    console.log('Coucou');
  }
};
const {
  callback,
  question = 'Saisir un entier',
} = options;

// Class
class Contact {
  constructor(prenom) {
    this._prenom = prenom;
  }

  static getClass() {
    return 'Contact';
  }

  hello() {
    return 'Hello, my name is ' + this._prenom;
  }
}

// Contact est toujours une fonction constructeur avec
// un prototype (class n'existe pas, c'est juste un mot clé)
console.log(typeof Contact); // function
Contact.prototype.bye = function() {
  return 'Bye bye, I was ' + this._prenom;
};

const romain = new Contact('Romain');
console.log(romain.hello());
console.log(romain.bye());

class Formateur extends Contact {
  constructor(prenom, specialite) {
    super(prenom);
    this.specialite = specialite;
  }
  hello() {
    return super.hello() + ', I am trainer';
  }
}

const romainFormateur = new Formateur('Romain', 'JS');
console.log(romainFormateur.hello());
