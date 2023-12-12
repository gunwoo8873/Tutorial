const express = require(`express`)
const fs = require('fs')
const Mainapp = express()

Mainapp.get('*',(request, response) => {
    // response.redirect('http://www.naver.com')
    console.log(request.query); // request(Type) output log
    response.send(request.query)
})

Mainapp.listen(52273, () => {
    console.log('Server http://127.0.0.1:52273')
})