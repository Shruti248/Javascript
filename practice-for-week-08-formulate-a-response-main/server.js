const http = require('http');
const fs = require('fs')

const server = http.createServer((req, response) => {
    fs.readFile('index.html', (error, data) => {
        if (error) {
            response.writeHead(404)
            response.write('File Not Found.')
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.write(data);
        }
        response.end();
    })
})

server.listen(5000, () => {
    console.log('Server is listening on Port 5000');
})
