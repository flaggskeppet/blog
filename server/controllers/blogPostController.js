var BlogPost = require('mongoose').model('BlogPost');

exports.getBlogPosts = (req, res) => {

  BlogPost.find({}).exec((err, collection) => {
    res.send(collection);
  });
};

exports.getBlogPostById = (req, res) =>{
  BlogPost.findOne({_id:req.params.id}).exec(function(err, blogPost){
    res.send(blogPost)
  });
}