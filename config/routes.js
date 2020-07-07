/** FIle Containing all of our API's Routes*/

// Import Controller
    import controller from "../src/controllers/ExampleController";


// Utilisé dans /config/server.js
export default (app) => {

  
/**
   * Here you place your Routes
   */
    app.get('/', function(req,res) {
        res.send("Welcome to your API");
    })
    .get('/api/example', controller.getExample)
    .put('/api/example', controller.createExample)
    .patch('/api/example/:id', controller.updateExample)
    .delete('/api/example/:id', controller.deleteExample);
    
}