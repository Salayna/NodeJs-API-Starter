# NodeJs API Starter

## Introduction
This project is just a quick setup for an API using Express JS and MongoDB

### Used Package
* Express
* Babel
* Body-Parser
* dotenv
* Mongoose
* Mongoose Unique Validator
* Nodemon(for Dev Testing)

## Directories and Sub-Directories

### Config

In this folder we have 3 files server.js, database.js and routes.js 
* **server.js** is where we create and setup our server
* **database.js** contains the singleton managing the mongoDB connection using Mongoose.
* **routes.js** is the file containing our endpoints for the API

### Src
Here you have your Model-Service-Controller architecture
* **models** Containing your data-models 
* **services** Containing your services function(functions that will be executed when using an endPoint)
* **Controllers** Will make it usable for the server and turn it into request

