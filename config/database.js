/**
 * This class will the the one managing the database, 
 * it's a singleton so it's only instanciate once 
 * but since it's using a global promise its instance can be called in multiple location in the code
 */

require('dotenv').config();
import mongoose from 'mongoose';



class Connection {
  constructor() {
    try {
        const url = process.env.MONGODB_URI;
    console.log('Establish new connection with database');
    console.log("using environment var : ", url);

    //mongoose.Promise = global.Promise; -> Global Promise
    mongoose.Promise = global.Promise;
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(url);
    } catch (error) {
        console.log(error);
    }
    
  }
}

export default new Connection();

