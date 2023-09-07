const express = require('express');
const router = require('./routes');
const errorhandler = require('./middlewares/errorhandler');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(router);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome!'
    });
});

app.all('*', (_, res) => {
    res.status(404).json({
        success: false,
        message: 'Requested url not found!'
    });
});

app.use(errorhandler);
module.exports = app;
