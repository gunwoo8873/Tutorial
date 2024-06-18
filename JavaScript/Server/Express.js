const express = require(`express`)
const app = express();

app.get(`/page/:id`, (req, res) => {
    const Mainid = req.params.id
    res.send(__dirname+"/index.html");
})

app.post(`/page/:id`, (req, res) => {
    const Mainbid = req.params.id;
    res.send(`<h1>${id}Post Request Page</h1>`);
});

app.listen(52273, () => {
    // http://IP/page/id(임의)
    console.log('Server http://127.0.0.1:52273/page/1111');
})