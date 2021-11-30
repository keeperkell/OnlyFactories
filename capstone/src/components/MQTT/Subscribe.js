// command: node ./src/components/MQTT/sub.js

const mqtt = require('mqtt');
const url = 'ws://mqtt.eclipseprojects.io:80/mqtt';
let client = mqtt.connect(url);

client.on('connect', function(){
    client.subscribe('UofICapstone_Cloud');
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
    }
    //if status message is received
    else if(data.msg_type == 'status'){
        console.log(data)
    }
    //if inventory is received
    else if(data.msg_type == 'inventory'){
        console.log(data)
    }
    //if cancel status is received
    else if(data.msg_type == 'cancel status'){
        console.log(data)
    }
    //if webcam status is received
    else if(data.msg_type == 'request status'){
        console.log(data)
    }
    //?????????
    else if(data.msg_type == 'factory status'){
        console.log(data)
    }
    else {
        console.log(data)
    }

});