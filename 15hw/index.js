const http = require('http')
const fs = require('fs')
const path = require('path')
const request = require('request')



const https = require('https')
const options = {
  hostname: 'api.privatbank.ua',
  port: 443,
  path: '/p24api/pubinfo?json&exchange&coursid=3',
  method: 'GET'
}



const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Hello UnderWorld!')
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
    } else if (req.url === '/courses') {
        const req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)
          
            res.on('data', (url) => {
                fs.writeFile('index.html',url);
            })
          })
          res.end()
          req.on('error', error => {
            console.error(error)
          })
          
          req.end()
    } else {
        res.write('Error')
        res.end()
    }
})
server.listen(3000, () => {
    console.log('Server at http://localhost:3000');
})




