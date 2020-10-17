const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const RandomNumbers = require('./utils/newTicket.jsx');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

app.get('/ticket', (req, res, next) => {
  res.send(RandomNumbers.getNewTicketObject());
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server listening on port: ${PORT}`));