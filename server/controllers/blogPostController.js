var BlogPost = require('mongoose').model('BlogPost');

exports.getBlogPosts = (req, res) => {

  BlogPost.find({}).exec((err, collection) => {
    res.send(collection);
  });
};

exports.getBlogPostById = (req, res) => {
  BlogPost.findOne({ _id: req.params.id }).exec(function (err, blogPost) {
    res.send(blogPost)
  });
}

exports.createBlogPost = (req, res) => {
  var blogData = req.body;
  
  BlogPost.create(blogData, function (error, user) {
    if (error) {
      res.status(401);
      return res.send();
    }
    else {
      res.status(201);
      return res.send(user);
    };
  });
}