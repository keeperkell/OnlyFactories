// command: node ./src/components/MQTT/sub.js

//const fetch = require("node-fetch");

const { reduce, update } = require('lodash');
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

    //if ordar status message is received
    if(topic === 'Factory/Echo'){
        console.log("Echo message Received")
        console.log(message)
    }
    else{
        var msg = JSON.parse(message);

        // If an inventory message is received, parse the JSON message
        // and count red, blue, white quantities. Create new timestamp 
        // and inventory object to send to DB
        if(topic == 'Factory/Inventory'){

            // init red, blue, white vars
            let r = 0;
            let b = 0;
            let w = 0;

            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    switch(msg.Inventory[i][j]){
                        case 'red':
                            r += 1;
                            break;
                        case 'blue':
                            b += 1;
                            break;
                        case 'white':
                            w += 1;
                            break;
                        default:
                            break;
                    }
                }
            }

            // timestamp for updated inventory
            let currentDate = new Date();
            let updated_at = currentDate.getFullYear() + '-' + (currentDate.getMonth()+1) + '-'
                    + currentDate.getDate() + ' ' + currentDate.getHours() + ':'
                    + currentDate.getMinutes() + ':' + currentDate.getSeconds();

            console.log(msg.Inventory)

            let inventoryDetails = {
                quantityRed: r,
                quantityBlue: b,
                quantityWhite: w,
                updated_at: updated_at
            }

            console.log(inventoryDetails)
        }
        if(topic == 'Factory/Status'){
            console.log("Factory Status received")
            console.log(msg);
        }
        if(topic == 'Factory/Job_notice'){
            console.log("Job Notice received")
            console.log(msg);
        }
    }
    
});