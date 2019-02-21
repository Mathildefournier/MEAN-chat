// Configuration du module
let express = require('express');
let router = express.Router();

// Configuration de la route => http://localhost:3000/
router.get('/', (req, res) => {
   // Envoi du fichier html du dossier /client dans la réponse
   res.render('index');
});

// Export du module
module.exports = router; 