import { ReadLine, createInterface } from 'readline';
import { getRandomIntInclusive } from './random';

// 2 - Typer toutes les variables sauf readline
export class Jeu {
    private rl: ReadLine;
    private entierAlea: number;
    private essais: number[];

    constructor(options: {min?: number, max?: number} = {}) {
        const {min = 0, max = 100} = options;

        this.rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.entierAlea = getRandomIntInclusive(min, max);
        this.essais = [];
    }

    jouer(): void {

        if (this.essais.length) {
            console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}`);
        }

        this.rl.question('Saisir un nombre entier : ', (saisie) => {
            const entierSaisi: number = Number.parseInt(saisie);

            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : il faut saisir un nombre');
                return this.jouer();
            }

            this.essais.push(entierSaisi);

            if (entierSaisi < this.entierAlea) {
                console.log(`${entierSaisi} est trop petit`);
                return this.jouer();
            }

            if (entierSaisi > this.entierAlea) {
                console.log(`${entierSaisi} est trop grand`);
                return this.jouer();
            }

            console.log('Gagné !!!');
            this.rl.close();
        });

    }
}
