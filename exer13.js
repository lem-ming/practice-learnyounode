const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        const requrl = url.parse(req.url, true)
        const date = new Date(requrl.query.iso)
        let data

        if (/^\/api\/parsetime/.test(req.url)) {
            data = {
                'hour': date.getHours(),
                'minute': date.getMinutes(),
                'second': date.getSeconds()
            }
        } else if (/^\/api\/unixtime/.test(req.url)) {
            data = {
                'unixtime': date.getTime()
            }
        }

        if (data) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(data))
        } else {
            res.writeHead(404)
            res.end()
        }
    }
})

server.listen(Number(process.argv[2]))
