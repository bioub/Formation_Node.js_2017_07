const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const calc = require('../../theorie/calculette');

// describe, it
// beforeEach, afterEach

describe('Tests calculette', () => {
    describe('Tests addition', () => {
        it('should return 3 when addition(1, 2)', () => {
            expect(calc.addition(1, 2)).to.equal(3);
        });
    });

    describe('Tests multiplication', () => {
        it('should return 3 when addition(1, 2)', () => {
            assert.strictEqual(calc.multiplication(2, 3), 6);
        });
    });
});
