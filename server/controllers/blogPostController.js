var BlogPost = require('mongoose').model('BlogPost');

exports.getBlogPosts = (req, res) => {
  console.log("BlogPost controller!")

  BlogPost.find({}).exec((err, collection) => {
    res.send(collection);
  });
};