import React, { createContext, useContext, useState, useEffect } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const start_todos = [
        { id: 1, title: 'Помыть руки', completed: true },
        { id: 2, title: 'Сделать зарядку', completed: false },
        { id: 3, title: 'Наконец изучить React', completed: true }
    ];

    let local_data = JSON.parse(localStorage.getItem('todos'));
    const [todos, setTodos] = useState(local_data || start_todos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const deleteTodoByid = (id) => {
        setTodos(todos.filter(elem => elem.id !== id));
    };

    const changeTodos = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const addTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    return (
        <TodoContext.Provider value={{ todos, deleteTodoByid, changeTodos, addTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => {
    return useContext(TodoContext);
};
