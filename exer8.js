const http = require('http')

let url = process.argv[2]

http.get(url, (response) => {
    response.setEncoding('utf8')

    let str = ''

    response.on('data', (data) => {
        str += data
    })

    response.on('end', () => {
        console.log(str.length)
        console.log(str)
    })
})
