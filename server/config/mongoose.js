var mongoose = require('mongoose'),
    blogPostModel = require('../models/BlogPost');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('blog db opened');
  });
  
  blogPostModel.createDefaultBlogPosts();
}