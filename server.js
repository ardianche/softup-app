//Install express server
const express = require('express');
const path = require('path');

const app = express();


let env = process.env.NODE_ENV || 'development';

let forceSSL = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};

if (env === 'production') {
  app.use(forceSSL);
}

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/softup'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/softup/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(8080);