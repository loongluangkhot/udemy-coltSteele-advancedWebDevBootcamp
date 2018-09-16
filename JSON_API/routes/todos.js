var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require('../models');
var helpers = require('../helpers/todos');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.route('/')
.get(helpers.getTodos)
.post(helpers.createTodo);

router.route('/:todoId')
.get(helpers.showTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo);

module.exports = router;