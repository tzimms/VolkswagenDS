const connection = require('./config');

connection.query(
    `
    INSERT INTO vehicle(model, licence) 
    VALUES ('Arteon', '2945EF')`,
    (err) => {
      console.log(err);
      console.log('vehicle table seeded');
    },
  );

  connection.query(
    `
    INSERT INTO booking 
    (name, date, start_time, end_time, start_km, end_km, destination, vehicle_id) 
    VALUES 
    ('Edward', '2020-01-10' , '08:00:00', '10:00:00', 1000, 1050, '40.71727401; -74.00898606', 1), 
    ('Victoria', '2020-01-10', '12:00:00','15:00:00', 1064, 1090, '40.71727401; -74.00898606', 1),
    ('Angelina', '2020-01-11', '09:00:00', '10:00:00', 1200, 1300, '40.71727401; -74.00898606', 1),
    ('Alexandra', '2020-01-11', '15:00:00', '16:00:00', 1350, 1380, '40.71727401; -74.00898606', 1),
    ('Elena', '2020-01-13', '10:00:00', '11:00:00', 1390, 1420, '40.71727401; -74.00898606', 1)
  `,
    (err) => {
      console.log(err);
      console.log('booking table seeded'); 
      connection.end();
    },
  );