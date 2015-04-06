// Usage see http://scn.sap.com/community/developer-center/front-end/blog/2014/01/05/sapui5-sdk-on-nodejs

var express = require('express'),
	compression = require('compression'),
	serveIndex = require('serve-index'),
	serveStatic = require('serve-static'),
	open = require('open');
	app = express(),
	port = process.env.PORT || 8877,
	sapui5 = '/ui5-boilerplate',
	url = 'http://localhost:' + port + sapui5,// + "/latest";
	year = 60 * 60 * 24 * 365 * 1000;
 
// Use compress middleware to gzip content
app.use(compression());
 
//set default mime type to xml for ".library" files
express.static.mime.default_type = "text/xml";
 
// Serve up content directory showing hidden (leading dot) files
app.use(sapui5, serveStatic(__dirname, { maxAge: year, dotfiles: 'allow' }));

// enable directory listening
app.use(sapui5, serveIndex(__dirname));
 
app.listen(port);
open(url); //open in default browser
console.log("Static file server running at\n  => " + url + " \nCTRL + C to shutdown");