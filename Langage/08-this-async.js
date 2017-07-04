// En ES3
var contact = {
  prenom: 'Romain',
  helloAsync() {
    var that = this;
    setTimeout(function () {
      console.log(`Bonjour je m'appelle ${that.prenom}`);
    }, 1000)
  }
};

contact.helloAsync();

var saluer = function(prenom) {
  console.log(`Bonjour ${prenom} je m'appelle ${this.prenom}`);
};

saluer.call(contact, 'Olivier');
saluer.apply(contact, ['Olivier']);
saluer.call(contact, ...['Olivier']);
var saluerContact = saluer.bind(contact);
saluerContact('Olivier');

// En ES5
var contact = {
  prenom: 'Romain',
  helloAsync() {
    setTimeout(function () {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }.bind(this), 1000)
  }
};

contact.helloAsync();

var contact = {
  prenom: 'Romain',
  hello() {
    console.log(`Bonjour je m'appelle ${this.prenom}`);
  },
  helloAsync() {
    setTimeout(this.hello.bind(this), 1000)
  }
};

contact.helloAsync();

// En ES6
var contact = {
  prenom: 'Romain',
  helloAsync() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 1000)
  }
};

contact.helloAsync();


/*
 var createButton = function(label) {
    var btnElt = document.createElement('button');
    btnElt.innerText = label;
    btnElt.addEventListener('click', function onClick(e) {
      console.log(e.target.innerText);
      console.log(this.innerText);
    });
    return btnElt;
 };

 var btn = createButton('Clic moi');
 */
