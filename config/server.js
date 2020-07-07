/** Fichier source permettant de créer et d'instancier le serveur */

import express from 'express';
import bodyParser from 'body-parser';
import setRoutes from './routes';

// Création du serveur + bodyParser
const server = express();
server.use(bodyParser.json());

// Attribution des routes au serveur
setRoutes(server);

// Utilisé dans /index.js
export default server;