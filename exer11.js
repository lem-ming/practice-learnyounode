const fs = require('fs')
const http = require('http')

const file = fs.createReadStream(process.argv[3])

const server = http.createServer((req, res) => {
    file.pipe(res)
    res.end()
})

server.listen(process.argv[2])
