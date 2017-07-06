const express = require('express');

const contacts = [{
    prenom: 'Steve',
    nom: 'Jobs',
    id: 123,
}, {
    prenom: 'Bill',
    nom: 'Gates',
    id: 456,
}];

const app = express();

// API Restful (URLs conventionnées)
// List
app.get('/api/contacts', (req, res) => {
    res.json(contacts);
});
// Add
app.post('/api/contacts', (req, res) => {});
// Show
// 1 - Retourner en JSON, le contact du tableau
// dont l'id vous a été envoyé dans l'URL
app.get('/api/contacts/:id', (req, res) => {
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
app.put('/api/contacts/:id', (req, res) => {});
// Delete
// 2 - Supprimer le contact du tableau
// dont l'id vous a été envoyé dans l'URL
// Pour le retour 2 options possible
// - retourner en JSON le contact supprimé
// - ne rien retourner et utiliser le status 204

// 3 - Ajouter la gestion des erreurs 404
// (si le contact n'est dans le tableau)

app.delete('/api/contacts/:id', (req, res) => {
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

module.exports = app;