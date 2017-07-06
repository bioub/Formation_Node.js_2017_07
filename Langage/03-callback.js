// Un callback (fonction de rappel)
// (on voit souvent le terme listener)
// est une fonction qu'on appelle pas directement
// on demande son appel (pour chaque élément d'un tableau,
// pour chaque ligne d'un fichier, quand le clic se produira
// quand on aura reçu la réponse du serveur...)

// 2 types de callback

// Synchrone
var setTimeoutSync = function(cb, delay) {
  var debut = Date.now();

  while (debut + delay > Date.now());

  cb();
};

setTimeoutSync(function onTimeout() {
  console.log('une seconde s\'est écoulée (version sync)');
}, 500);

console.log('Après le callback synchrone');
// une seconde s'est écoulée
// Après le callback asynchrone


// Asynchrone
setTimeout(function onTimeout() {
  console.log('une seconde s\'est écoulée (version async)');
}, 1000);

console.log('Après le callback asynchrone');
// Après le callback asynchrone
// une seconde s'est écoulée











