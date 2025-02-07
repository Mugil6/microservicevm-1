const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3300;

const connection = mysql.createConnection({
  host: '192.168.1.13',
  user: 'mugil@6',
  password: 'Lang@999',
  database: 'mugil_dbs'
 });
 connection.connect((err) => {
   if (err) {
     console.error('Error while connecting to the db:', err.stack);
     return;
   }
   console.log('Successfully connected!');
 });
 
 app.get('/Name', (req, res) => {
   connection.query('SELECT * FROM Name', (err, results, fields) => { 
  if (err) {
    res.status(500).send('Error in connection');
    return;
   }
   res.json(results);
  });
 });
 
app.listen(port, () => {
  console.log('I am listening at http://localhost:${port}');
});
 

