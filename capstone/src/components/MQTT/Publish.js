
// command: node ./src/components/MQTT/pub.js

const mqtt = require("mqtt");
var _ = require('lodash');
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io');
//var msg_id = 'SO1000';  //have dynamic msg_id based off of number of messages sent 

const orderStatus = {
    msg_type: 'order status',
    sim_msg_id: 'OS1000'
}

const status = {
    msg_type: 'status',
    sim_msg_id: 'RS1000',
}

const requestInventory = {
    msg_type: 'inventory',
    sim_msg_id: 'RI1000'
}

const cancelStatus = {
    msg_type: 'cancel status',
    sim_msg_id: 'CS1000'
}

const webcamStatus = {
    msg_type: 'webcam status',
    sim_msg_id: 'WS1000'
}

const unableStatus = {
    msg_type: 'unable status',
    sim_msg_id: 'US1000'
}

var commands = [orderStatus, status, requestInventory, cancelStatus, webcamStatus, unableStatus];

function incrementID(data){
    var prefix = data.sim_msg_id.slice(0,2)
    var id = data.sim_msg_id.slice(2)

    //concat msg type ID with incremented value
    data.sim_msg_id = prefix + String(Number(id) + 1)
}

client.on("connect", function(){

    client.subscribe('UofICapstone');

    setInterval(function(){
        var random_command = _.sample(commands);

        var payload = JSON.stringify(random_command);
        //var payload = JSON.stringify(orderStatus);

        console.log(payload);
        client.publish('UofICapstone', payload);
        incrementID(random_command);

    },2000 );
});