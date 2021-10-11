// command: node ./src/components/MQTT/sub.js

const mqtt = require('mqtt');
var client = mqtt.connect('mqtt://mqtt.eclipseprojects.io');

client.on('connect', function(){
    client.subscribe('UofICapstone');
    console.log('Client has subscribed successfully');
});

function publishResponse(data){
    var prefix = data.sim_msg_id.slice(0,1)
    var id = data.sim_msg_id.slice(2)

    //concat msg type ID with incremented value
    data.sim_msg_id = prefix + String(Number(id) + 1)
    var payload = JSON.stringify(data)

    client.publish('UofICapstoneSim', payload)
}

client.on('message', function(topic, message){
    var data = JSON.parse(message);

    //if ordar status message is received
    if(data.msg_type == 'order status'){
        console.log(data)
        publishResponse(data);
    }
    //if status message is received
    if(data.msg_type == 'status'){
        console.log(data)
        publishResponse(data);
    }
    //if inventory is received
    if(data.msg_type == 'inventory'){
        console.log(data)
        publishResponse(data);
    }
    //if cancel status is received
    if(data.msg_type == 'cancel status'){
        console.log(data)
        publishResponse(data);
    }
    //if webcam status is received
    if(data.msg_type == 'webcam status'){
        console.log(data)
        publishResponse(data);
    }
    //?????????
    if(data.msg_type == 'unable status'){
        console.log(data)
        publishResponse(data);
    }
});