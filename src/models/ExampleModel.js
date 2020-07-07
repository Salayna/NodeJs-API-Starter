/**
 * Creating our Model 
 */
import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class Example {

  /**
   * Creating the Schema
   */
  initSchema() {
    const schema = new Schema({
    /**
     * This is a field, here you define his type and if it's required(if true the request won't work without the field) 
     */
    content:{
        type: String,
        required: true, 
      },
    }, { timestamps: true });
    /**
     * mongoose-unique-validator is a plugin which adds pre-save validation for unique fields within a Mongoose schema.
     */
    schema.plugin(uniqueValidator);
    mongoose.model('examples', schema);
  }

/**
 * Returning an Instance of this Model for it to be used by the service
 */
  getInstance() {
    this.initSchema();
    return mongoose.model('examples');
  }
}

export default Example;