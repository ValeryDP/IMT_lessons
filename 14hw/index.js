const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Hello World!')
        res.end()
    } else if (req.url === '/about') {
        console.log(req)
        res.end()
    } else if (req.url === '/contact') {
            fs.readFile(path.join('index.html'), (err, data) => {
                if (err) {
                    throw err
                }
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                })
                res.end(data)
            })
    } 
})
server.listen(3000, () => {
    console.log('Server at http://localhost:3000');
})