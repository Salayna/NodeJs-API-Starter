/** 
 * File that Node will start to start our API and where we launch our server
 */
require('dotenv').config();
import './config/database';
import server from './config/server';

const PORT = process.env.PORT;

// Sarting the Server
server.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});