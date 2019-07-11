const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url)
    let content = '';
    if (request.url == '/') {
        content = fs.readFileSync('index.html', 'utf-8');
    } else if (request.url == '/') {
        content = fs.readFileSync('', 'utf-8');
    }
    response.end(content);
});

server.listen(process.env.PORT || 3000);
console.log('server started!');
