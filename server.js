const express = require('express');

const app = express();

const env = process.env.NODE_ENV || 'development';

const config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/routes')(app);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');