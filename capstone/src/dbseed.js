var mysql = require('mysql')
var connection = mysql.createConnection({
  host      : 'factory-orders.ctu961ikr6c4.us-east-2.rds.amazonaws.com',
  user      : 'admin',
  password  : 'x3QxHJ0IYbxjhY88zQSm',
  port      : 3306
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.end();
});