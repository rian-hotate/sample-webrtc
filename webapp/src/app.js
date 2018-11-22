var redis = require('redis');
var redis_client = redis.createClient(6379, "redis");
var listen_port = 3000;

require('http').createServer(function(req, res) {
  redis_client.incr('counter', function(error, reply) {
    var fs = require('fs');
    fs.readFile('./template/app.html', 'utf-8', function(err, data) {
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write(data);
      res.end();
    });
  });
}).listen(listen_port, '0.0.0.0');
console.log('server is running on port ' + listen_port + '.');
