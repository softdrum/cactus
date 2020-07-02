const mqtt = require('mqtt')


const client = mqtt.connect('mqtt://192.168.0.101:1883')

client.on('message', (topic, message) => {
    console.log(`Topic: ${topic}\nmessage: ${message}`);
})

client.on('connect', () => {
    client.subscribe('test')
})
const publisher = mqtt.connect('mqtt://192.168.0.101:1883')

publisher.on('connect', () => {
    publisher.publish('test', 'Hello')
})