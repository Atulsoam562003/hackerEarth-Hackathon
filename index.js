var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'buit8la0c9hb9pbw0swp-mysql.services.clever-cloud.com',
  user     : 'uqnd2mperbkmbsky',
  password : 'owJOgXOWfPQNjslENQMR',
  database : 'buit8la0c9hb9pbw0swp'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();