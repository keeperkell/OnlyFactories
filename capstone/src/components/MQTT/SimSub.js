// command: node ./src/components/MQTT/sub.js

const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io');

client.on('connect', function(){
    client.subscribe('UofICapstoneSim');
    console.log('Client has subscribed successfully');
});

client.on('message', function(topic, message){
    var data = JSON.parse(message);
    console.log('Message ID = ' + data.sim_msg_id)

});