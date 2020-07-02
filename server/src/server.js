const express = require('express');
const app = express();
const broker = require('./broker').init();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
})

app.listen(PORT, () => {
    console.log('Server has been started');
})

