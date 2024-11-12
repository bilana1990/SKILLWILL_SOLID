// components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTaskCompletion, onDeleteTask }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onComplete={() => onToggleTaskCompletion(index)}
          onDelete={() => onDeleteTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;