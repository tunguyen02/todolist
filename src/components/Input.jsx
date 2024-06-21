import React, { useRef } from 'react';
import './Input.css';

function Input({ addTodo }) {
    const inputRef = useRef();

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(inputRef.current.value);
        inputRef.current.value = '';
    };

    return (
        <form className="input-form" onSubmit={handleAddTodo}>
            <input type="text" ref={inputRef} className="input-text" placeholder="add details" />
            <button type="submit" className="input-button">Add</button>
        </form>
    );
}

export default Input;
