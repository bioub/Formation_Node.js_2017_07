// On peut typer statiquement des variables
// et donc améliorer la complétion
// et la détection d'erreur

const hello = (prenom: string) => {
    return 'Bonjour ' + prenom;
};

console.log(hello('Romain'));

const sum = (a: number|string, b: number|string = 0) => {
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

function upper(prototype: object, key: string) {
    let _v: string;

    Object.defineProperty(prototype, key, {
        set(v: string) {
            _v = v.toUpperCase();
        },
        get() {
            return _v;
        }
    })
}

class Contact {

    @upper
    protected prenom: string;

    constructor(prenom: string) {
        this.prenom = prenom;
    }

    hello() {
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}

const romain: Contact = new Contact('Romain');
console.log(romain.hello());

