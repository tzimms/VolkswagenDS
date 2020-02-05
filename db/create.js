const connection = require('./config');


const Vehicle = `
  CREATE TABLE IF NOT EXISTS vehicle (
    id INT NOT NULL AUTO_INCREMENT,
    model VARCHAR(225) NOT NULL,
    licence VARCHAR(225) NOT NULL,
    PRIMARY KEY (id)
  );`
  ;


const Booking = `
  CREATE TABLE IF NOT EXISTS booking (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    start_km INT NULL,
    end_km INT NULL,
    destination VARCHAR(225) NOT NULL,
    vehicle_id INT NOT NULL,
    PRIMARY KEY (id),
      FOREIGN KEY (vehicle_id)
      REFERENCES volkswagen.vehicle (id)
    );
`;



  connection.query(Vehicle, (err) => {
    if (err) {
      console.log(err);
      connection.end();
    } else {
      console.log('vehicle created');
      connection.query(Booking, (err) => {
        if (err) {
          console.log(err);
          connection.end();
        } else {
            console.log('booking created');
        }}
     )
     connection.end();}
    }
)