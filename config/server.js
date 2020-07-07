/** This where we create our server */

import express from 'express';
import bodyParser from 'body-parser';
import setRoutes from './routes';

// Server creation and  Body-Parser MiddleWare 
const server = express();
server.use(bodyParser.json());

// Retreiving the Routes
setRoutes(server);


export default server;