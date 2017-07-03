/**
 * Additionne 2 paramètres
 * @param {number|string} a Le 1er nombre
 * @param {number|string} b Le 2e nombre
 * @returns {number} La somme
 */
const sum = (a, b) => {
  return Number(a) + Number(b);
};

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(sum(i, i));
  }
}
