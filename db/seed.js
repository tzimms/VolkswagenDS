const connection = require('./config');

connection.query("INSERT INTO todo (task, isDone) VALUES ('buy cereal', 0), ('pay rent', 0)", (err) => {
    console.log(err)
    console.log("database seeded")
    connection.end()
})
