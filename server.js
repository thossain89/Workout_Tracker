const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');
const path =require('path');
const routes = require('./controller');

//Initialize DB

require('./config/connection')()

const PORT = process.env.PORT || 3001;
const app = express();


app.use(logger("dev"));
app.use(compression());
app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  