/** Fichier source affichant toutes les routes disponibles du serveur */

// Import Controller
    import controller from "../src/controllers/ExampleController";


// Utilisé dans /config/server.js
export default (app) => {

  
/**
   * Here you place your Routes
   * (Example)
   * app.post('/api/signup', Controller.Method);
   */
    app.get('/', function(req,res) {
        res.send("Welcome to your API");
    })
    .get('/api/example', controller.getExample)
    .put('/api/example', controller.createExample)
    .patch('/api/example', controller.updateExample)
    .delete('api/example', controller.deleteExample);
    
}