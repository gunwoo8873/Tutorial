const express = require(`express`)
const fs = require('fs')
const Mainapp = express()

Mainapp.get('*',(request, response) => {
    response.status(404) // 404 = client error
    response.send('Server File error 404')
})

Mainapp.listen(52273, () => {
    console.log('Server http://127.0.0.1:52273')
})