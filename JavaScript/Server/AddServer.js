const http = require('http');

http.createServer(function(req, res) {
    res.write(`Test HTTP server`); // Client Msg Response
    res.end();
}).listen(8080) // Server PortNumber 8080