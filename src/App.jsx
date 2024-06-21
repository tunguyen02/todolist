import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const initialTodoList = JSON.parse(localStorage.getItem('todos')) || [];
  const [todoList, setTodoList] = useState(initialTodoList);
  const [status, setStatus] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (item) => {
    const newTodo = { item, id: Date.now(), done: false };
    setTodoList([...todoList, newTodo]);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  };

  const deleteAllCompleted = () => {
    const updatedTodos = todoList.filter((todo) => !todo.done);
    setTodoList(updatedTodos);
  };

  const filteredList = (() => {
    switch (status) {
      case 'active':
        return todoList.filter((todo) => !todo.done);
      case 'done':
        return todoList.filter((todo) => todo.done);
      default:
        return todoList;
    }
  })();

  return (
    <div className="app-container">
      <h1 className="app-title">#todo</h1>
      <Navigation status={status} setStatus={setStatus} />
      {status !== 'done' && <Input addTodo={addTodo} />}
      {filteredList.map((todo) => (
        <TodoList
          key={todo.id}
          id={todo.id}
          item={todo.item}
          completed={todo.done}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          showDeleteButton={status === 'done'}
        />
      ))}
      {status === 'done' && (
        <button className="delete-button" onClick={deleteAllCompleted}>
          <i class="fa-solid fa-trash-can"></i>
          delete all
        </button>
      )}
    </div>
  );
}

export default App;
