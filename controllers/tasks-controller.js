const Task = require ('../models/Task');

const getAllTasks = (req, res, next) => {
    Task.getAll((err, results) => {
        if(err){
            res.render('error', err)
        }
        req.tasks = results;
        next();
    });
}

const addNewTask = (req, res, next) => {
    Task.create(req.body,(err) => {
        if(err){
            res.render('error', err)
        }
        res.redirect("/")
    });
}

const toggleDone = (req, res, next) => {
    Task.toggle(req.params.id,(err) => {
        if(err){
            res.render('error', err)
        }
        res.redirect("/")
    });
}

const deleteTask = (req, res, next) => {
    Task.delete(req.body.id,(err) => {
        if(err){
            res.render('error', err)
        }
        res.redirect("/")
    });
}

const getCurrentTask = (req, res, next) => {
   Task.findById(req.params.id, (err, results) => {
        if(err){
            return res.render('error', err)
        }
        req.task = results[0];
        next();
   }) 
} 

const editCurrentTask = (req, res, next) => {
    Task.update(req.params.id, req.body, (err, results) => {
        if(err){
            return res.render('error', err)
        }
        res.redirect("/");
   }) 
}

module.exports = { getAllTasks, addNewTask, toggleDone, deleteTask, getCurrentTask, editCurrentTask };