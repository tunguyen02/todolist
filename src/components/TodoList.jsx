import React from 'react';
import './TodoList.css';

function TodoList({ id, item, completed, toggleComplete, deleteTodo, showDeleteButton }) {
    const handleToggleComplete = () => {
        toggleComplete(id);
    };

    const handleDeleteTodo = () => {
        deleteTodo(id);
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={handleToggleComplete}
            />
            <p className={completed ? 'completed' : ''}>{item}</p>
            {showDeleteButton && completed && (
                <button onClick={handleDeleteTodo} className="delete-icon">
                    X
                </button>
            )}
        </div>
    );
}

export default TodoList;
