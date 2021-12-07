const sql = require("./db.js");

//Constructor
const FactoryOrder = function(factoryorder) {
    this.orderID = factoryorder.orderID;
    this.fullName = factoryorder.fullName;
    this.email = factoryorder.email;
    this.orderStatus = factoryorder.orderStatus;
    this.transactionID = factoryorder.transactionID;
    this.qualityRED = factoryorder.qualityRED;
    this.qualityBLUE = factoryorder.qualityBLUE;
    this.qualityWHITE = factoryorder.qualityWHITE;
    this.created_at = factoryorder.created_at;
    this.updated_at = factoryorder.updated_at;
};

FactoryOrder.create = (newFactoryOrder, result) =>{
    sql.query("INSERT INTO FactoryOrders SET ?", newFactoryOrder, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created order: ", {id: res.insertId, ...newFactoryOrder});
        result(null, { id: res.insertId, ...newFactoryOrder });

    });
};

FactoryOrder.findByID = (id, result) => {
    sql.query(`SELECT * FROM FactoryOrders WHERE id = ${id}`, (er, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length){
            console.log("found Order: ", res[0]);
            result(null, res[0]);
            return;
        }

        //not found Order with the id
        result({ kind: "not_found"}, null);

    });
};

FactoryOrder.getAll = (orderID, result) => {
    let query = "SELECT * FROM FactoryOrders";

    if(orderID){
        query += `WHERE orderID LIKE '%${orderID}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Orders: ", res);
        result(null, res);
    });
};

module.exports = FactoryOrder;

