require('rootpath')();
var express = 			require('express');
var path = 				require('path');
var config = 			require('./config.json');
var favicon = 			require('serve-favicon');
var logger = 			require('morgan');
var cors = 				require('cors');
var bodyParser = 		require('body-parser');
var mongoose = 			require('mongoose');

var router = 			express.Router();
var expressJwt =        require('express-jwt');
var userService = 		require('./user.service');
//Deprecated on newest mongoose version
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/thandi2', {useMongoClient: true})
	.then(() => {
        console.log('working mongodb');
		let Cat = mongoose.model('Cat', {name: String});
		let kitty = new Cat({name: 'Zildjian'});

		kitty.save(err => {
			if (err) {
				console.log(err);
			} else {
				console.log('Connection working!!');
			}
		});
	})
	.catch(err => console.error(err));

var serie = require('./routes/serie');
var user  = require('./routes/user');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/serie', serie);
app.use('/user',  user);

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
//app.use(expressJwt({
  //  secret: config.secret,
    //getToken: function (req) {
      //  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        //    return req.headers.authorization.split(' ')[1];
        //} else if (req.query && req.query.token) {
          //  return req.query.token;
        //}
        //return null;
    //}
//}).unless({ path: ['/users/authenticate', '/users/register'] }));


// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;