const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12598590',
  password: 'IJmtCvjQnp',
  database: 'sql12598590' ,
  port : 3306
})

connection.connect("jdbc:mysql://sql6.freesqldatabase.com:3306/sql12598590")

connection.query('', (err, rows, fields) => {
  if (err) console.log(err);
  else {

  }
})

connection.end()