const connection = require('./config');

connection.query("CREATE TABLE todo (id INT PRIMARY KEY AUTO_INCREMENT, task VARCHAR(255), isDone BOOL DEFAULT 0)", (err) => {
    console.log(err)
    console.log("query complete")
})
