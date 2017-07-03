var logClosure = function(msg) {
  // Portée de closure (portée sauvegardée)
  // 2 conditions :
  // - 2 fonctions imbriquées
  // - la fonction interne soit appelée en dehors
  return function() {
    console.log(msg);
  };
};

var logHello = logClosure('Hello');
logHello();

// 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function onTimeout() {
    console.log(i);
  }, 1000);
}

// 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(logClosure(i), 1000);
}

/*
var createButton = function(label) {
  var btnElt = document.createElement('button');
  btnElt.innerText = label;
  btnElt.addEventListener('click', function onClick() {
    console.log(label);
  });
  return btnElt;
};

var btn = createButton('Clic moi');

for (var i=0; i<3; i++) {
 var btn = createButton('Delete');
}
 */
