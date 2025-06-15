import React, { useState, useEffect } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortAsc, setSortAsc] = useState(true);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('tasks'));
    if (saved) setTasks(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const trimmed = taskInput.trim();
    if (!trimmed) return alert('Task cannot be empty!');
    setTasks([...tasks, { id: Date.now(), text: trimmed, completed: false }]);
    setTaskInput('');
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    return sortAsc
      ? a.text.localeCompare(b.text)
      : b.text.localeCompare(a.text);
  });

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">React To-Do List</h2>
      <div className="flex mb-4">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Enter task..."
        />
        <button
          onClick={addTask}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      <div className="mb-2 flex gap-2">
        <button onClick={() => setFilter('all')} className="btn">All</button>
        <button onClick={() => setFilter('active')} className="btn">Active</button>
        <button onClick={() => setFilter('completed')} className="btn">Completed</button>
        <button onClick={() => setSortAsc(!sortAsc)} className="ml-auto text-sm underline">
          Sort {sortAsc ? '↓' : '↑'}
        </button>
      </div>
      <ul className="space-y-2">
        {sortedTasks.map(task => (
          <li key={task.id} className="flex items-center justify-between p-2 bg-gray-100 rounded">
            <span
              onClick={() => toggleComplete(task.id)}
              className={`cursor-pointer flex-grow ${task.completed ? 'line-through text-gray-400' : ''}`}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)} className="text-red-500 hover:underline">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
