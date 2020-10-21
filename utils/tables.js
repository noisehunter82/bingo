const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.run(`CREATE TABLE NewTickets (
  id INTEGER NOT NULL,
  user_id TEXT NOT NULL UNIQUE,
  ticket NVARCHAR(4000) NOT NULL,
  PRIMARY KEY (id)
)`);

db.run(`CREATE TABLE UpdatedTickets (
  id INTEGER NOT NULL,
  user_id TEXT NOT NULL UNIQUE,
  ticket NVARCHAR(4000) NOT NULL,
  PRIMARY KEY (id)
)`);