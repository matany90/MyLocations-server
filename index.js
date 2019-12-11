const express = require('express');

const app = express();

app.get('/auth', (req, res) => {
    res.send({ test: 'test'})
})

const PORT = process.env.PORT || 5000; // listen to Heroku's given port (prod), or take 5000 (dev)
app.listen(PORT);