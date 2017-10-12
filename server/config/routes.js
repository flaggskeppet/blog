var mongoose = require('mongoose'),
    blogPostController = require('../controllers/blogPostController');

module.exports = function (app) {
    app.get('/partials/*', function (req, res) {
        console.log("routing to " + req.params[0])
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('/api/blog_post', blogPostController.getBlogPosts);

    app.get('*', function (req, res) {
        console.log("app.get *")
        res.render('index', {});
    });
}