// command: node ./src/components/MQTT/sub.js

const mqtt = require('mqtt');
const url = 'wss://onlyfactories.duckdns.org:9001';
let client = mqtt.connect(url);

client.on('connect', function(){
    client.subscribe('Factory/Echo');
    client.subscribe('Factory/Inventory');
    client.subscribe('Factory/Status');
    client.subscribe('Factory/Job_notice');

    console.log('Client has subscribed successfully');
});

client.on('message', function(topic, message){
    // var data = JSON.parse(message);

    msg = JSON.parse(message);

    //if ordar status message is received
    if(topic === 'Factory/Echo'){
        console.log("Echo message Received")
        console.log(msg)
    }
    if(topic == 'Factory/Inventory'){
        console.log("Inventory message Received")
        console.log(msg)
    }
    if(topic == 'Factory/Status'){
        console.log("Factory Status received")
        console.log(msg);
    }
    if(topic == 'Factory/Job_notice'){
        console.log("Job Notice received")
        console.log(msg);
    }
});