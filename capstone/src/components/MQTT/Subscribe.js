// command: node ./src/components/MQTT/sub.js

//const fetch = require("node-fetch");

const { json } = require('express/lib/response');
const mqtt = require('mqtt');
const url = 'wss://onlyfactories.duckdns.org:9001';
let client = mqtt.connect(url);

client.on('connect', function(){
    /*
    client.subscribe('Factory/Echo');                           // test topic that will echo back a message
    client.subscribe('Factory/Inventory');                      // listen for messages about inventory
    client.subscribe('Factory/Status');                         // listen for messages about factory status
    client.subscribe('Factory/Job_notice');                     // listen for messages about Job updates
    client.subscribe('UofICapstone_Cloud');
    client.subscribe('Factory/Webcam');
    */
    console.log('Client has subscribed successfully');

    client.subscribe('UofICapstone_Cloud');
});

client.on('message', function(topic, message){
    /*
    if(topic == 'Factory/Echo'){
        console.log('Factory Echo');
    }
    
    else if(topic == 'Factory/Inventory'){
        console.log('Inventory');
    }

    else if(topic == 'Factory/Status'){
        payload = JSON.parse(message);
        console.log("Factory Status:");
        console.log("\t",payload)
    }

    else if(topic == 'Factory/Job_notice'){
        payload = JSON.parse(message);
        console.log("Job Notice:");
        console.log("\t",payload)
    }

    else{
        console.log("Else: ");
        payload = JSON.parse(message);
        console.log("\t",payload)
    }
    */

    if(topic === 'UofICapstone_Cloud'){
        payload = JSON.parse(message);
        console.log(payload);
    }

});