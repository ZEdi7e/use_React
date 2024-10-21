import React from 'react';
import { useTodos } from '../context/TodoContext';

function TodoItem({ id }) {
    const { todos, deleteTodoByid, changeTodos } = useTodos();
    const todo = todos.find(todo => todo.id === id);

    if (!todo) return null;

    const { title, completed } = todo;

    return (
        <div 
            className="todo_card"
            style={{ backgroundColor: completed ? 'green' : 'red' }}
            onDoubleClick={() => deleteTodoByid(id)}
            onClick={() => changeTodos(id)}
        >
            <h2>{title}</h2>
        </div>
    );
}

export default TodoItem;
