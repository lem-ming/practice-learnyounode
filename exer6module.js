module.exports = (dir, ext, callback) => {
    const fs = require('fs')
    const path = require('path')

    fs.readdir(dir, 'utf8', (err, files) => {
        if (err) return callback(err)

        var filtered = []
        files.forEach(file => {
            if (path.extname(file) == '.' + ext) {
                filtered.push(file)
            }
        })
        callback(null, filtered)
    })
}
