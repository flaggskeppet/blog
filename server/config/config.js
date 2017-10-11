var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/blog',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://jar_mattsson:blog@ds053178.mongolab.com:53178/blog', // TODO: setup
    port: process.env.PORT || 80
  }
}