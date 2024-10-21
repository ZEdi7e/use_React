import React from 'react';
import { TodoProvider } from './context/TodoContext';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

function App() {
    return (
        <TodoProvider>
            <div>
                <AddForm />
                <TodoList />
            </div>
        </TodoProvider>
    );
}

export default App;
