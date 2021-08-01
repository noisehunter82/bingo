const express = require('express');
const ticketsRouter = express.Router({mergeParams: true});
const NewTicket = require('../utils/newTicket');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

ticketsRouter.get('/', (req, res, next) => {
  const newTicket = NewTicket.getNewTicketObject();
  console.log(newTicket, req.params.userId);
  db.serialize(() => {
    db.run(`INSERT INTO NewTickets (user_id, ticket) VALUES ($user, $ticket)
    ON CONFLICT (user_id) DO UPDATE SET ticket = $ticket`,
      {
        $user: req.params.userId,
        $ticket: JSON.stringify(newTicket)
      });
    db.run(`INSERT INTO UpdatedTickets (user_id, ticket) VALUES ($user, $ticket)
    ON CONFLICT (user_id) DO UPDATE SET ticket = $ticket`,
      {
        $user: req.params.userId,
        $ticket: JSON.stringify(newTicket)
      });
  });
  res.send({ ticket: newTicket }); 
});

//retrieve currently saved ticket for a given user

ticketsRouter.put('/', (req, res, next) => {
  //add ticket verification
  db.run(`INSERT INTO UpdatedTickets (user_id, ticket) VALUES ($user, $ticket)
    ON CONFLICT (user_id) DO UPDATE SET ticket = $ticket`,
    {
      $user: req.params.userId,
      $ticket: JSON.stringify(req.body.ticket)
    }, function (err) {
    if (err) {
      return next(err);
    }
    db.get('SELECT * FROM UpdatedTickets WHERE user_id = $user', { $user: req.params.userId }, (err, row) => {
      if (err) {
        return next(err);
      }
      const jsonTicket = JSON.parse(row.ticket);
      res.status(200).send({ ticket: jsonTicket });
    })
    
  });
});

module.exports = ticketsRouter;