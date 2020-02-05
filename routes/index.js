const express = require('express');
const router = express.Router();
const { showHomepage, showEditPage } = require('../controllers/pages-controller');
const { getAllTasks, addNewTask, toggleDone, deleteTask, getCurrentTask, editCurrentTask } = require('../controllers/tasks-controller');


/* GET home page. */
router.get('/', showHomepage)

/*POST new task*/
router.post('/new', addNewTask)

/*EDIT task to done*/
router.post('/isdone/:id', toggleDone)

/*DELETE task*/
router.post("/delete", deleteTask)

/*GEt edit page*/
router.get("/edit/:id", getCurrentTask, showEditPage)

/*POST edita page */
router.post("/edit/:id", editCurrentTask)

module.exports = router;
