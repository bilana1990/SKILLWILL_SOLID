// App.js
import React, { useState } from 'react';
import Task from './models/Task';
import TaskManager from './services/TaskManager';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [taskManager] = useState(new TaskManager());
  const [tasks, setTasks] = useState(taskManager.getTasks());

  const handleAddTask = (title, description) => {
    const newTask = new Task(title, description);
    taskManager.addTask(newTask);
    setTasks([...taskManager.getTasks()]);
  };

  const handleToggleTaskCompletion = (taskIndex) => {
    taskManager.toggleTaskCompletion(taskIndex);
    setTasks([...taskManager.getTasks()]);
  };

  const handleDeleteTask = (taskIndex) => {
    taskManager.removeTask(taskIndex);
    setTasks([...taskManager.getTasks()]);
  };

  return (
    <div>
      <h1>TODO List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTaskCompletion={handleToggleTaskCompletion}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
