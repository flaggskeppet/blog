var Blog = require('mongoose').model('Blog');

exports.getBloglist = (req, res) => {
  console.log("Blog controller!")

  Blog.find({}).exec((err, collection) => {
    res.send(collection);
  });
};