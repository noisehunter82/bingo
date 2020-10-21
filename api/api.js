const express = require('express');
const usersRouter = require('./users');
const apiRouter = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

//app.use(express.static('public'));
apiRouter.use(morgan('dev'));
apiRouter.use(bodyParser.json());
apiRouter.use(cors());

apiRouter.use('/users', usersRouter);

module.exports = apiRouter;