var db = require('../models');

exports.getTodos = function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(err) {
        res.send(err); 
    });
};

exports.createTodo = function(req, res) {
    // res.send(req.body);
    db.Todo.create(req.body)
    .then(function(todo) {
        res.status(201).json(todo);
    })
    .catch(function(err) {
        res.send(err);
    });
};

exports.showTodo = function(req, res) {
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo) {
        res.json(foundTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
};

exports.updateTodo = function(req, res) {
    db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
    .then(function(updatedTodo) {
        res.json(updatedTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
};

exports.deleteTodo = function(req, res) {
    db.Todo.findByIdAndRemove(req.params.todoId)
    .then(function() {
        res.json({message: 'Todo deleted!'});
    })
    .catch(function(err) {
        res.send(err);
    });
};

module.exports = exports;