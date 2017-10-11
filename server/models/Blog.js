var mongoose = require('mongoose');

var blogSchema = mongoose.Schema({
    header: String,
    text: String
});

var Blog = mongoose.model('Blog', blogSchema);

function createDefaultBlogPosts() {
    Blog.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            console.log('Added blog posts')
            Blog.create({ header: 'The first header', text: 'Bla bla lots of text' });
            Blog.create({ header: 'Another header', text: 'Bla bla even more text' });
        }
    });
}

exports.createDefaultBlogPosts = createDefaultBlogPosts;