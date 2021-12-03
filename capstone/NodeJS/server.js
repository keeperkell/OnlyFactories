const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const connection = require("./models/db.js");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

var orderID = 1;

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "OnlyFactories BD Port!" });
});

app.post('/', (req, res) => {
  var{orderID} = req.body;
  var records = [[req.body.orderID]];
  if(records[0][0]!=null){
    connection.query(`SELECT * from FactoryOrders WHERE orderID = ${orderID}`, function(err,res,fields){
      if(err) throw err;

      console.log(res);
    });
  }
  res.json('Order received');
  res.json(records);
})

require("../NodeJS/routes/orders.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});