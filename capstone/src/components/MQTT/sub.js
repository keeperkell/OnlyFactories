const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io');

client.on('connect', function(){
    client.subscribe('UofICapstone');
    console.log('Client has subscribed successfully');


});

client.on('message', function(topic, message){
    console.log(message.toString());
});