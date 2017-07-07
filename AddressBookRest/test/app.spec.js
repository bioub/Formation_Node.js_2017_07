const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/app');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Tests functionals', () =>{
  describe('Tests /api/contacts', () => {
    describe('Tests GET /api/contacts', () => {
      it('should be accessible', (done) => {
        chai.request(app)
          .get('/api/contacts')
          .then(res => {
            expect(res).to.have.status(200);
            done();
          });
      })
    });
  });
});
