var server = require('pushstate-server');

server.start({
  port: 5000,
  directory: './static'
});
