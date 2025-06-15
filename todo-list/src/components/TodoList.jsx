import React, { useState, useEffect } from 'react';
import './TodoList.css'; // optional if you're styling separately

const TodoList = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortAsc, setSortAsc] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('tasks'));
    if (stored) setTasks(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!taskInput.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setTaskInput('');
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortAsc) return a.text.localeCompare(b.text);
    return b.text.localeCompare(a.text);
  });

  return (
    <div className="todo-container">
      <h2>React To-Do List</h2>

      <div className="todo-input-group">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button className="sort-button" onClick={() => setSortAsc(!sortAsc)}>
          Sort {sortAsc ? '↓' : '↑'}
        </button>
      </div>

      <ul className="task-list">
        {sortedTasks.map(task => (
          <li key={task.id} className="task-item">
            <span
              onClick={() => toggleComplete(task.id)}
              className={task.completed ? 'completed' : ''}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
