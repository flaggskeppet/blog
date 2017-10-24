var mongoose = require('mongoose'),
    blogPostController = require('../controllers/blogPostController');

module.exports = app => {
    app.get('/partials/*', (req, res) => {
        console.log("routing to " + req.params[0])
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('/api/blog_post', blogPostController.getBlogPosts);
    app.get('/api/blog_post/:id', blogPostController.getBlogPostById);
    app.post('/api/blog_post', blogPostController.createBlogPost);

    app.get('*', (req, res) => {
        console.log("app.get *")
        res.render('index', {});
    });
}