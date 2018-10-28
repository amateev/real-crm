// Dependencies
var express = require("express");
var app = express();
var mysql = require('mysql');

//you need this to be able to process information sent to a POST route
// to get req.body
// get inf from forms, post request
var bodyParser = require('body-parser');
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));

  // parse application/json
  app.use(bodyParser.json());


var PORT = 3001;
var app = express();

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",

  // Your password
  password: "",
  database: "real_crm_db"
});

//we have to have it befor the routs
/*
  if we don't do this here then we'll get this error in apps that use this api

  Fetch API cannot load No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

  read up on CORs here: https://www.maxcdn.com/one/visual-glossary/cors/
*/
  //allow the api to be accessed by other apps (otherwise you cannot access this rout using App.js and only local host cant use this API like 3001)
  //we are setting headers
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
  });
//next() goes to the next route
  

app.get('/', function(req, res){
  res.send('hi');
});

// get the list of all agents
app.get('/agents', function(req, res){
  connection.query(
      "SELECT * FROM agent",
      function(err, response) {
        res.json(response);
      }
    );
});

// get the list of all clients
app.get('/clients', function(req, res){
  connection.query(
      "SELECT * FROM client",
      function(err, response) {
        res.json(response);
      }
    );
});



//add an agent
app.post('/submit', function(req, res){
  // res.json(req.body);
  // req.body turns into an object
   connection.query(
       "INSERT INTO agent (first_name, last_name, city, phone, email) VALUES (?, ?, ?, ?, ?, ?)",
  [req.body.first_name, req.body.last_name, req.body.city, req.body.phone, req.body.email],
      function(err, response) {
        if (err) throw err;
      }
    );

});


//display an agent
app.get('/agents/:id', function(req, res){
  res.send('hi'),
  connection.query(
       "SELECT * FROM agent WHERE id=?",
  [req.param.id],
      function(err, response) {
        if (err) throw err;
      }
    );
})


//delete an agent
app.post('/agents/:id', function(req, res){
  
  connection.query(
       "DELETE FROM agent WHERE id=?",
  [req.param.id],
      function(err, response) {
        if (err) throw err;
      }
    );
})



app.post('/pets/:id', function(req, res){
  //curl -X POST http://localhost:3001/pets/5bb2de27c385cb3290b0e598

  db.pets.remove({
    "_id": mongojs.ObjectID(req.params.id)
  }, function(error, removed) {
    if (error) {
      res.send(error);
    }else {
      res.json(req.params.id);
    }
  });
});

app.post('/pets', function(req, res){
  
  // req.body may look like this: {name: 'fido', age: 3} 

  //curl -d "name=fido&age=3" -X POST http://localhost:3001/pets

  db.pets.insert(req.body, function(error, savedPet) {
    // Log any errors
    if (error) {
      res.send(error);
    }else {
      res.json(savedPet);
    }
  });
});

app.listen(PORT, function() {
  console.log('🌎 ==> Now listening on PORT %s! Visit http://localhost:%s in your browser!', PORT, PORT);
});



