var mongoose = require('mongoose'),
    blog = require('../controllers/blog');

module.exports = function (app) {
    app.get('/partials/*', function (req, res) {
        console.log("routing to " + req.params[0])
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('/api/blog_list', blog.getBloglist);

    app.get('*', function (req, res) {
        console.log("app.get *")
        res.render('index', {});
    });
}