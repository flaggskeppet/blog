var mongoose = require('mongoose'),
    blogPostModel = require('../models/BlogPost');

module.exports = config => {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', () => {
    console.log('blog db opened');
  });
  
  blogPostModel.createDefaultBlogPosts();
}