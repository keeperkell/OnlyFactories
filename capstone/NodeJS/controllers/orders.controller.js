const FactoryOrder = require("../models/orders.model.js");

// Create and Save a new FactoryOrder
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
      res.status(400).send({
          message: "Content can not be empty!"
      });
  }

  //Create a FactoryOrder
  const factoryorder = new FactoryOrder({
      orderID: req.body.orderID,
      fullName: req.body.fullName,
      email: req.body.email,
      orderStatus: req.body.orderStatus,
      transactionID: req.body.transactionID, 
      quantityRED: req.body.quantityRED,
      quantityBLUE: req.body.quantityBLUE,
      quantityWHITE: req.body.quantityWHITE
  });

  //Save FactoryOrder in database
  FactoryOrder.create(factoryorder, (err, data) => {
      if(err) {
          res.status(500).send({
              message:
                err.message || "Some error occured while creating the order."
          });
      }
      else res.send(data);
  });

};

// Retrieve all FactoryOrders from the database (with condition).
exports.findAll = (req, res) => {
    const orderID = req.query.orderID;

  Tutorial.getAll(orderID, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving FactoryOrders."
      });
    else res.send(data);
  });
};

// Find a single FactoryOrder with a id
exports.findOne = (req, res) => {
    FactoryOrder.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found FactoryOrder with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving FactoryOrder with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};

/*// Update a FactoryOrder identified by the id in the request
exports.update = (req, res) => {
  
};

// Delete a FactoryOrder with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all FactoryOrders from the database.
exports.deleteAll = (req, res) => {
  
};*/