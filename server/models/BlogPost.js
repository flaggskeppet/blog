var mongoose = require('mongoose');

var blogPostSchema = mongoose.Schema({
    header: String,
    text: String,
    author: String,
    created_at: Date
});

var BlogPost = mongoose.model('BlogPost', blogPostSchema);

function createDefaultBlogPosts() {
    BlogPost.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            console.log('Added blog posts')
            BlogPost.create({ header: 'Mastering Mongoose', author: 'Pam', created_at: new Date('2017-10-05'), text: 'Mongoose provides a schema base solution to...' });
            BlogPost.create({ header: 'Fast track NodeJS',  author: 'Ben', created_at: new Date('2017-10-11'), text: 'Node.js® is a JavaScript runtime built on Chromes V8 JavaScript engine' });
        }
    });
}

exports.createDefaultBlogPosts = createDefaultBlogPosts;