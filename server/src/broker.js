const mosca = require('mosca')


module.exports = {
    init () {
        const broker = new mosca.Server({
            port: 1883
        })

        broker.on('ready', () => {
            console.log('Broker ready');
        })
    }
}