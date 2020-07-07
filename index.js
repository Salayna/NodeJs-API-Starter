/** Fichier exécuté en premier par Node
 * Permet d'éxécuter le serveur
 */
require('dotenv').config();
import './config/database';
import server from './config/server';

const PORT = process.env.PORT;

// Démarrage du serveur sur : "localhost:5000"
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});