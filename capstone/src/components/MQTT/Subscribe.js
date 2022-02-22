// command: node ./src/components/MQTT/sub.js

//const fetch = require("node-fetch");

const { reduce, update } = require('lodash');
const mqtt = require('mqtt');
const url = 'wss://onlyfactories.duckdns.org:9001';
let client = mqtt.connect(url);

client.on('connect', function(){
    client.subscribe('UofICapstone_Cloud');

    console.log('Client has subscribed successfully');
});

client.on('message', function(topic, message){
    payload = JSON.parse(message);
    console.log(payload)
    
});