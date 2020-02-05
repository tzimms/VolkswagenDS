const connection = require('../db/config');

class Task {
    constructor(){

    }
};

Task.getAll = (callback) => {
    connection.query(
        'select * from todo', 
        (err, results, fields) => {
            callback(err, results, fields)
        }
    )

}

Task.create = (taskInfo, callback) => {
    connection.query(
        'INSERT INTO todo SET ?',
        taskInfo, 
        (err, results, fields) => {
            callback(err, results, fields)
        }
    )

}

Task.toggle = (id, callback) => {
    connection.query(
        'UPDATE todo SET isDone = !isDone where id=?',
        id, 
        (err, results, fields) => {
            callback(err, results, fields)
        }
    )

}

Task.delete = (id, callback) => {
    connection.query(
        'DELETE FROM todo WHERE id=?',
        id, 
        (err, results, fields) => {
            callback(err, results, fields)
        }
    )

}

Task.findById = (id, cb) => {
    const sql = `SELECT * FROM todo WHERE id = ?`;
    connection.query(sql, id, (err, results, fields) => {
        cb(err, results);
    })
} 

Task.update = (id, taskInfo, cb) => {
    const sql = `UPDATE todo SET ? WHERE id = ?`;
    connection.query(sql, [taskInfo, id], (err, results) => {
        cb(err, results);
    })
}

module.exports = Task;