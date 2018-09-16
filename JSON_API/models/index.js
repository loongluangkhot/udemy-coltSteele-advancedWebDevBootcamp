var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect("mongodb://localhost:27017/todos-api");

mongoose.Promise = Promise;

module.exports.Todo = require('./todos');