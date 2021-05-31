const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000;
const distPath = '/dist'

app.use(express.static(__dirname + distPath))

app.get('/*', (req, res) => {
    const path = __dirname + `${distPath}${req.path}.html`
    fs.access(path, fs.constants.F_OK, (e) => {
        if (e) {
            res.sendFile(__dirname + `${distPath}/error404.html`)
        } else {
            res.sendFile(__dirname + `${distPath}${req.path}.html`)
        }
    })
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})