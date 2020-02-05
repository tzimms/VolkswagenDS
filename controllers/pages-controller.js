const showHomepage = (req, res, next) => {
    res.render('index');
}


const showEditPage = (req, res,next) => {
    res.render("edit", { task: req.task });
};

module.exports = { showHomepage, showEditPage };