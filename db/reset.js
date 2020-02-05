const connection = require('./config');

connection.query('DROP TABLE booking', (err) => {
    if (err) console.log(err);
    console.log('query complete');
    connection.query('DROP TABLE vehicle', (err) => {
      if (err) console.log(err);
      console.log('query complete');
      connection.end();
    })
});