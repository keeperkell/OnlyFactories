//import { PutItemCommand } from '@aws-sdk/lib-dynamodb';
//import { ddbClient } from '../libs/ddbClient';
const { ddbClient } = require('../libs/ddbClient')
const {PutItemCommand} = require('@aws-sdk/client-dynamodb')

// set the parameters
const params = {
    TableName: "Factory-Orders",
    Item: {
        OrderID: { N: '001'},
        Color: {S: 'Red'},
        Email: {S: '123@test.com'},
        Name: {S: 'Jerry'},
        OrderStatus: {S: 'In Progress'},
        Quantity: { N: '001' },
        TransactionID: { N: '001' },
    },
};

const run = async () => {
    try{
        const data = await ddbClient.send(new PutItemCommand(params));
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
};

run();