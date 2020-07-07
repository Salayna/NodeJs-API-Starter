/** Fichier source affichant toutes les routes disponibles du serveur */

// Importation des Controllers


// Utilisé dans /config/server.js
export default (app) => {

  
/**
   * Here you place your Routes
   * (Example)
   * app.post('/api/signup', Controller.Method);
   */
    app.get('/', function(req,res) {
        res.send("Welcome to your API");
    });
    
}