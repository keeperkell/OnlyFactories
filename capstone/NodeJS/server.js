const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const connection = require("./models/db.js");

const app = express().use('*', cors());


// parse requests of content-type - application/json -- middleware
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


//Set up allowed orgins, headers and methods for CORS communication
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Upgrade-Insecure-Requests");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
};

app.use(allowCrossDomain);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "OnlyFactories BD Port!" });
});

//Query Start for finding an Order by orderID. Sent 
//from localhost:3000/tracking to localhost:3306/tracking
app.get('/api/tracking/:id', (req, res) => {
  const orderID = req.params.id;

  if(orderID != null){
    connection.query(`SELECT * from FactoryOrders WHERE orderID = ${orderID}`, function(err,results,fields){
      if(err) throw err;

      console.log(results);
      res.json(results);
      return;
    });
  }
})
//Query END

//Query Start for creating an order. Sent from 
//localhost:3000/ordering to localhost:3306/ordering
app.post('/api/ordering', (req, res) => {

  //set keys/map for request body
  var{orderID, fullName, email, quantityRED, quantityBLUE, quantityWHITE, orderStatus, transactionID, created_at, updated_at} = req.body;

  //define map and set to records array
  var records = [[req.body.orderID, req.body.fullName, req.body.email, req.body.orderStatus, req.body.transactionID, req.body.quantityRED, req.body.quantityBLUE, req.body.quantityWHITE, req.body.created_at, req.body.updated_at]];
  //check if submitted request was empty
  //query database if not empty
  if(records[0][0]!=null){
    connection.query("INSERT INTO FactoryOrders (orderID, fullName, email, orderStatus, transactionID, quantityRED, quantityBLUE, quantityWHITE, created_at, updated_at) VALUES ?", [records], function(err,res,fields){
    
      //if there is an error querying database, throw error
      if(err) throw err;

      console.log(res);
    });
  }
  
  //return message and data received from query
  res.json('Order received');
  res.json(records);
})
//Query END

//probably move all routing queries to this location in the future, 
//as API expands
require("../NodeJS/routes/orders.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});