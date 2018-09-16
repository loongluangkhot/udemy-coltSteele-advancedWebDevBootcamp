/* global $ */ //for c9 linting

$(document).ready(function() {
    $.getJSON('/api/todos')
    .then(showTodos)
    .catch(function(err) {
        console.log(err);
    })
});

// listen for todo's creation
$('#todoInput').keypress(function(event) {
    if(event.which === 13) {
        var userInput = $('#todoInput').val();
        $('#todoInput').val('');
        createTodo(userInput);
    }
});

// listen for todo's removal
$('.list').on('click', 'span', function(e) {
    e.stopPropagation();
    var clickedTodo = $(this).parent();
    removeTodo(clickedTodo);
});

// listen for todo's strike-thru
$('.list').on('click', 'li', function(e) {
    // console.log($(this).data('completed'));
    var clickedTodo = $(this);
    updateTodo(clickedTodo);
});

function showTodo(todo) {
    var newTodo = $('<li>' + todo.name + '<span>X</span></li>');
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
    if(todo.completed) {
        newTodo.addClass('done');
    }
    newTodo.addClass('task');
    $('.list').append(newTodo);
}

function showTodos(todos) {
    todos.forEach(function(todo) {
        showTodo(todo);
    });
}

function createTodo(userInput) {
    $.post('/api/todos', {name: userInput})
    .then(function(createdTodo) {
        showTodo(createdTodo);
    })
    .catch(function(err) {
        console.log(err);
    })
}

function removeTodo(clickedTodo) {
    $.ajax('/api/todos/' + clickedTodo.data('id'), {
        method: 'DELETE'
    })
    .then(function(data) {
        console.log(data);
        clickedTodo.remove();
    })
    .catch(function(err) {
        console.log(err);
    });
}


function updateTodo(clickedTodo) {
    var clickedTodoStatus = clickedTodo.data('completed');
    $.ajax('/api/todos/' + clickedTodo.data('id'), {
        method: 'PUT',
        data: {'completed': !clickedTodoStatus}
    })
    .then(function(updatedTodo) {
        console.log(updatedTodo);
        clickedTodo.toggleClass('done');
        clickedTodo.data('completed', !clickedTodoStatus);
    })
    .catch(function(err) {
        console.log(err);
    });
}