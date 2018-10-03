const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/login', (req, res) => {
    console.log("Req");
    console.log(req.param('email'));
    res.json({responseCode: '200'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));