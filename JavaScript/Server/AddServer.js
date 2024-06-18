const http = require('http')

const server = http.createServer((req, res) => {
    res.write(`Test HTTP server`); // Client Msg Response
    res.statusCode = 200
    res.setHeader(`Content-type`, `txt/plain`)
    res.end();
})

server.listen(8080, "127.0.0.1", () => {
    console.log(`222`);
})