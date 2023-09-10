const express = require('express');
const router = require('./routes');
const errorhandler = require('./middlewares/errorhandler');
const morganlogger = require('./middlewares/morgan');
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(morganlogger);

app.use(router);

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome!'
    });
});

app.get('/health', (_, res)=>{
  res.status(200).json({
    success: true,
    message: 'site is running and up!'
  })
});

app.all('*', (_, res) => {
    res.status(404).json({
        success: false,
        message: 'Requested url not found!'
    });
});

app.use(errorhandler);
module.exports = app;
