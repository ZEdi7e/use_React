import React from 'react';
import TodoItem from './TodoItem';
import { useTodos } from '../context/TodoContext';

function TodoList() {
    const { todos } = useTodos();

    return (
        <div>
            {todos.map(elem => (
                <TodoItem 
                    key={elem.id}
                    id={elem.id}
                />
            ))}
        </div>
    );
}

export default TodoList;
