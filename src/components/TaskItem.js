// components/TaskItem.js
import React from 'react';

function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={onComplete}>
        {task.isCompleted ? 'Undo Complete' : 'Complete'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;