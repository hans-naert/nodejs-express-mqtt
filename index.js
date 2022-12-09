const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/browserMqtt.js',(req,res) => {
    console.log("browserMqtt.js requested");
    return res.sendFile(__dirname + '/node_modules/mqtt/dist/mqtt.js');
});
app.use(express.static('public'));

server.listen(3000, () => {
  console.log('listening on *:3000');
});