const express = require('express');
const app = express();
const broker = require('./broker').init();

const PORT = process.env.PORT || 80;
let data = 'TEST MESSAGE'
let topic = 'no topic'
setTimeout(() => {
    topic = "changed message"
}, 3000);
app.listen(PORT, () => {
    console.log('Server has been started');
})

const mqtt = require('mqtt')


const client = mqtt.connect('ws://cactus-watering.herokuapp.com:1883')

client.on('message', (topic, message) => {
    data = message
    topic = topic
})

client.on('connect', () => {
    client.subscribe('test')
})
const publisher = mqtt.connect('ws://cactus-watering.herokuapp.com/:1883')

publisher.on('connect', () => {
    publisher.publish('test', Math.random()*100 + ' хуй')
})


// const PORT = 10200;
app.get('/', (req, res) => {
    res.send(`<h1>Home</h1><br/>topic: ${topic} data: ${data}`)
})