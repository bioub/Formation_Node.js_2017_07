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
router.get('/', (req, res) => {
  Contact.find({}, 'prenom nom')
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((err) => {});
});

// Add
router.post('/', bodyParser.json(), (req, res) => {

});

// Show
// 1 - Retourner en JSON, le contact du tableau
// dont l'id vous a été envoyé dans l'URL
router.get('/:id', (req, res) => {
  const id = req.params.id;

  const contact = contacts.find(c => c.id === Number(id));

  if (!contact) {
    res.statusCode = 404;
    return res.json({
      msg: 'Le contact n\'existe pas',
    });
  }

  res.json(contact);
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
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  const iToDelete = contacts.findIndex(c => c.id === Number(id));

  if (iToDelete === -1) {
    res.statusCode = 404;
    return res.json({
      msg: 'Le contact n\'existe pas',
    });
  }

  const contact = contacts[iToDelete];

  contacts.splice(iToDelete, 1);

  res.json(contact);
});

module.exports = router;
