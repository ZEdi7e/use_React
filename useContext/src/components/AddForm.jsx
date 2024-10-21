import React from 'react';
import { useTodos } from '../context/TodoContext';

function AddForm() {
    const { addTodo } = useTodos();

    function handleKeyUp(event) {
        if (event.key === 'Enter') {
            addTodo(event.target.value);
            event.target.value = ''; // Очистка поля ввода
        }
    }

    return (
        <div className="input_elem">
            <input onKeyUp={handleKeyUp} />
        </div>
    );
}

export default AddForm;
