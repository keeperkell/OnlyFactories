
// command: node ./src/components/MQTT/pub.js

const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io');

const msg = {
    id: 'id_number',
    name: 'Capstone',
    type: 'react'
}

client.on("connect", function(){
    setInterval(function(){
        var payload = JSON.stringify(msg);

        console.log(payload);
        client.publish('UofICapstone', payload);

    },2000);
});