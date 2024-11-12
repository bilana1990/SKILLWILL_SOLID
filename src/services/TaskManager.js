// services/TaskManager.js
class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    removeTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    }
  
    toggleTaskCompletion(taskIndex) {
      const task = this.tasks[taskIndex];
      task.isCompleted ? task.undoComplete() : task.complete();
    }
  
    getTasks(filter = "all") {
      switch (filter) {
        case "completed":
          return this.tasks.filter(task => task.isCompleted);
        case "pending":
          return this.tasks.filter(task => !task.isCompleted);
        default:
          return this.tasks;
      }
    }
  }
  
  export default TaskManager;