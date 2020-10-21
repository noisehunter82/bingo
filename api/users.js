const express = require('express');
const ticketsRouter = require('./ticket');
const usersRouter = express.Router();

usersRouter.param('userId', (req, res, next, value) => {
  req.userId = value;
  next();
});
//verify user

//add user

//get all users

usersRouter.use('/:userId/ticket', ticketsRouter);

module.exports = usersRouter;