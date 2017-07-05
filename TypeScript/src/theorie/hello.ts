// On peut typer statiquement des variables
// et donc améliorer la complétion
// et la détection d'erreur

import "reflect-metadata";

const hello = (prenom: string) => {
    return 'Bonjour ' + prenom;
};

console.log(hello('Romain'));

const sum = (a: number|string, b?: number|string) => {
    return Number(a) + Number(b);
};

const prenoms: string[] = ['Romain', 'Jean', 'Eric'];

for (let prenom of prenoms) {
    console.log(prenom.toUpperCase());
}

interface Coords {
    x: number,
    y: number,
    z?: number,
}

const coords: Coords = {
    x: 1,
    y: 2,
};


class Contact {
    constructor(
        protected prenom: string,
        protected nom?: string,
    ) {}

    hello() {
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}

const romain: Contact = new Contact('Romain');
console.log(romain.hello());

