const http = require('http')

let results = []
let count = 0

for (let i = 0; i < 3; ++i) {
    http.get(process.argv[i + 2], (response) => {
        response.setEncoding('utf8')

        let str = ''

        response.on('data', (data) => {
            str += data
        })

        response.on('end', () => {
            results[i] = str
            ++count
            if (count === 3) {
                results.forEach((x) => {
                    console.log(x)
                })
            }
        })
    })
}
