const Router = require('express').Router;
const router = new Router();
const authorize = require('../middlewares/authorize');
const bodyParser = require('body-parser');
const Contact = require('../models/contact');

// Exercice :
// Implémenter les URL Show, Add, Delete avec Mongoose
// les méthodes à utiliser :
// Contact.create
// Contact.findById
// Contact.findByIdAndRemove

// API Restful (URLs conventionnées)
// List
router.get('/', (req, res, next) => {
  Contact.find({}, 'prenom nom')
    .then((contacts) => {
      res.json(contacts);
    })
    .catch(next);
});

// Add
router.post('/', bodyParser.json(), (req, res, next) => {
  Contact.create(req.body)
    .then(contact => {
      res.statusCode = 201;
      res.json(contact);
    })
    .catch(next);
});

// Show
router.get('/:id', (req, res, next) => {
  Contact.findById(req.params.id)
    .then(contact => {
      if (!contact) {
        return next();
      }

      res.json(contact);
    })
    .catch(next);
});

// Replace
router.put('/:id', authorize('admin'), (req, res) => {});

// Delete
// 2 - Supprimer le contact du tableau
// dont l'id vous a été envoyé dans l'URL
// Pour le retour 2 options possible
// - retourner en JSON le contact supprimé
// - ne rien retourner et utiliser le status 204

// 3 - Ajouter la gestion des erreurs 404
// (si le contact n'est dans le tableau)
router.delete('/:id', (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id)
    .then(contact => {
      if (!contact) {
        return next();
      }

      res.json(contact);
    })
    .catch(next);
});

module.exports = router;
