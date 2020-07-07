
import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class Example {

  // Schéma des notes
  initSchema() {
    const schema = new Schema({
    content:{
        type: String,
        required: true, 
      },
    }, { timestamps: true });
    schema.plugin(uniqueValidator);
    mongoose.model('examples', schema);
  }

//Similaire à ce qu'on a fait avec Briatte on renvoie une instance du model
  getInstance() {
    this.initSchema();
    return mongoose.model('examples');
  }
}

// Utilisé dans /src/services/NoteServices.js
export default Example;