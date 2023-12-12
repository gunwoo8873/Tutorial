const express = require(`express`)
const Mainapp = express();

Mainapp.get(`/page/:id`, (request, response) => {
    const Mainid = request.params.id
    response.send(`<h1>${Mainid}Get Request</h1>`);
})

Mainapp.post(`/page/:id`, (request, response) => {
    const Mainbid = request.params.id;
    response.send(`<h1>${id}Post Request Page</h1>`);
});

Mainapp.listen(52273, () => {
    // http://IP/page/id(임의)
    console.log('Server http://127.0.0.1:52273/page/1111');
})