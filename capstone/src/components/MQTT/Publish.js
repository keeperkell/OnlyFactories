// command: node ./src/components/MQTT/Publish.js

const mqtt = require("mqtt");
var _ = require('lodash');
const url = 'wss://onlyfactories.duckdns.org:9001';

var client = mqtt.connect(url);

/*
---------------------------------------------------------------
when creating MQTT packets, follow this scheme

var newSendOrder = sendOrder
updateSendOrder(newSendOrder)
var payload = JSON.stringify(newSendOrder)

// need to create functions for each packet type to query database
// for order IDs
---------------------------------------------------------------
*/

const sendOrder={
    msg_type: 'order',
    cloud_id: 'SO1000',
    location: 'location01',
    order_id: 'ABCDEF',
}

const orderStatus = {
    msg_type: 'request status', 
    cloud_id: 'OS1000', 
}

const status = {
    msg_type: 'factory status',
    cloud_id: 'RS1000', 
}

const requestInventory = {
    msg_type: 'inventory',
    cloud_id: 'RI1000'
}

const cancelStatus = {
    msg_type: 'cancel status',
    cloud_id: 'CS1000', 
    order_id: 'ABCDEFG', 
    canceled: 'True'
}

const webcamPower = {
    msg_type: 'webcam Power',
    cloud_id: 'WP1000',
    power: 'True', 
}

const webcamControl = {
    msg_type: 'control webcam',
    cloud_id: 'WC1000',
    y_turntable: 1, 
    x_turntable: 1
}

var commands = [sendOrder, orderStatus, status, requestInventory, cancelStatus];

function incrementID(data){
    var prefix = data.cloud_id.slice(0,2)
    var id = data.cloud_id.slice(2)

    //concat msg type ID with incremented value
    data.cloud_id = prefix + String(Number(id) + 1)
}

client.on("connect", function(){

    client.subscribe('UofICapstone');

    setInterval(function(){
        var random_command = _.sample(commands);

        var payload = JSON.stringify(random_command);
        //var payload = JSON.stringify(orderStatus);

        console.log(payload);
        client.publish('UofICapstone_Cloud', payload);
        incrementID(random_command);

    },2000 );
});