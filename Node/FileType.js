const express = require(`express`)
const fs = require('fs')
const Mainapp = express()

Mainapp.get('./image.png',(request, response) => {
    fs.readFile('image.png', (error, data) => { // imgage png or jpg filename
        response.type('image/png')
        response.send(data)
    })
})

Mainapp.get('/audio',(request, response) => {
    fs.readFile('audio.mp3', (error, data) => {
        response.type('audio/mpeg')
        response.send(data)
    })
})

Mainapp.listen(52273, () => {
    console.log('Server http://127.0.0.1:52273')
})