module.exports = app => {
    const orders = require("../controllers/orders.controller.js");
  
    var router = require("express").Router();
  
    // Create a new FactoryOrder
    router.post("/", orders.create);
  
    // Retrieve all FactoryOrders
    router.get("/", orders.findAll);
  
    // Retrieve a single FactoryORder with id
    router.get("/:id", orders.findOne);
  
    /*// Update a FactoryOrder with id
    router.put("/:id", tutorials.update);
  
    // Delete a FactoryOrder with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all FactoryOrders
    router.delete("/", tutorials.deleteAll);*/
  
    app.use('/api/orders', router);
  };