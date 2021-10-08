
// command: node ./src/components/MQTT/pub.js

const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io');

const messageConfirmation = {
    msg_type: 'id_number',
    msg_confirmation_id: 'Capstone',
    msg_type_received: 'react',
    msg_id: 'SO1000'
}

const sendOrder = {
    msg_type: 'order',
    cloud_msg_id: 'SO1000',
    x: '1',
    y: '1'
}

const requestStatus = {
    msg_type: 'request_status',
    cloud_msg_id: 'RS1000'
}

const cancelOrder = {
    msg_type: 'perform_inventory',
    cloud_msg_id: 'PI1000'
}

client.on("connect", function(){
    setInterval(function(){
        var payload = JSON.stringify(messageConfirmation);

        console.log(payload);
        client.publish('UofICapstone', payload);

    },1000);

    
});