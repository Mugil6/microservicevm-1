const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '192.168.1.12',
  user: 'mugil'@'6',
  password: 'Lang@999',
  database: 'mugil_dbs'
 });
 connection.connect((err) => {
   if (err) throw err;
   console.log('Successfully connected!');
 });
 

