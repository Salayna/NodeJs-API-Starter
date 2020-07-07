import Service from "../services/ExampleService";

class Controller {

    constructor(service) {
      this.service = new Service();
      this.getExample = this.getExample.bind(this);
      this.createExample = this.createExample.bind(this);
      this.updateExample = this.updateExample.bind(this);
      this.deleteExample = this.deleteExample.bind(this);
    }
  
    // get('/api/notes')
    async getExample(req, res) {
      let response = await this.service.get(req.headers);
      console.log(response);
      if (response.statusCode) {
        res.status(response.statusCode).send(response);
      }
      else {
        res.send(response);
      }
    }
  
    // put('/api/notes')
    async createExample(req, res) {
      let response = await this.service.insert(req.body);
      console.log(response);
      if (response.statusCode) {
        res.status(response.statusCode).send(response);
      }
      else {
        res.send(response);
      }
    }
  
    // patch('/api/notes/:id')
    async updateExample(req, res) {
      let response = await this.service.update(req.params.id, req.body);
      console.log(response);
      if (response.statusCode) {
        res.status(response.statusCode).send(response);
      }
      else {
        res.send(response);
      }
    }
  
    // delete('/api/notes/:id')
    async deleteExample(req, res) {
      let response = await this.service.delete(req.params.id);
      console.log(response);
      if (response.statusCode) {
        res.status(response.statusCode).send(response);
      }
      else {
        res.send(response);
      }
    }
  
  }
  
  // Utilisé dans /config/routes.js
  export default new Controller();