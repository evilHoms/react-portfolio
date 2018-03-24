require('babel-core/register');
// Ignoring files of formats below on server side rendering
['.css', '.less', '.sass', '.scss', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
// Get babel polifill for es6 on server
require('babel-polyfill');
var config = require('./config.json');
config.production ? require('./prod/server/server.js') : require('./src/server/server.js');