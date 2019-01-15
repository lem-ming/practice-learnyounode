const net = require('net')

function now() {
    let date = new Date()

    return date.getFullYear() + '-' +
        ('00' + (1 + date.getMonth())).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + ' ' +
        ('00' + date.getHours()).slice(-2) + ':' +
        ('00' + date.getMinutes()).slice(-2)
}

const server = net.createServer((socket) => {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
