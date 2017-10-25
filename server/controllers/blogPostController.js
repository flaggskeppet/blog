const BlogPostModel = require('mongoose').model('BlogPost');

const errorHandler = (err) => {
  res.status(401);
  return res.send()
}

exports.getBlogPosts = (req, res) => {
  BlogPostModel.find({}).exec((err, collection) => {
    res.send(collection);
  });
};

exports.getBlogPostById = (req, res) => {
  BlogPostModel.findOne({ _id: req.params.id }).exec(function (err, blogPost) {
    res.send(blogPost)
  });
}

exports.updateBlogPost = (req, res) => {
  BlogPostModel.findOne({ _id: req.params.id }).exec(function (err, blogPost) {
    blogPost.header = req.body.header;
    blogPost.text = req.body.text
    
    blogPost.save(function(err, updatedBlogPost){
      if(err){ 
        errorHandler(err);
      }
      else{
        res.status(204);
        return res.send();
      }
    });
  });
}

exports.createBlogPost = (req, res) => {
  var blogData = req.body;
  
  BlogPostModel.create(blogData, function (error, user) {
    if (error) {
      errorHandler(err);
    }else {
      res.status(201);
      return res.send(user);
    };
  });
}