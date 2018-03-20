require('babel-core/register');
['.css', '.less', '.sass', '.scss', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
var config = require('./config.json');
config.production ? require('./prod/server/server.js') : require('./src/server/server.js');