const mqtt = require("mqtt");
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io');

client.on("connect", function(){
    setInterval(function(){
        var random = Math.random() * 50;
        console.log(random);

        if(random < 30){
            client.publish('UofICapstone', 'Simple MQTT message: ' + random.toString() + '.');

        }

    }), 30000;
});