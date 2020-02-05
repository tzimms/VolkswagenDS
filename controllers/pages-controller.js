const showHomepage = (req, res, next) => {
    res.render('index', { title: 'Wild Code School', tasks: req.tasks });
}


const showEditPage = (req, res,next) => {
    res.render("edit", { task: req.task });
};

module.exports = { showHomepage, showEditPage };