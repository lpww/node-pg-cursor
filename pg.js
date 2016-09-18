var path = require('path');
var resolve = require('resolve');
var pgPath;
//support both pg & pg.js
//this will eventually go away when i break native bindings
//out into their own module
try {
  pgPath = path.dirname(resolve.sync('pg', {basedir: __dirname}));
} catch(e) {
  pgPath = path.dirname(resolve.sync('pg.js', {basedir: __dirname})) + '/lib';
}

module.exports.Result = require(path.join(pgPath, 'result.js'));
module.exports.prepareValue = require(path.join(pgPath, 'utils.js')).prepareValue;
