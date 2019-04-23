var argv = require('yargs').argv;
var mockServer = require('node-mock-server');

var port = argv.port !== undefined ? argv.port : 3011;
mockServer({
    dirName: __dirname,
    restPath: __dirname + '/rest',
    port: port,
    urlBase: argv.urlBase || `http://localhost:${port}`,
    urlPath: argv.urlPath || '/apiGtw/hybridAdvisory'
});
