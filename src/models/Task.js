// models/Task.js
class Task {
    constructor(title, description) {
      this.title = title;
      this.description = description;
      this.isCompleted = false;
    }
  
    complete() {
      this.isCompleted = true;
    }
  
    undoComplete() {
      this.isCompleted = false;
    }
  }
  
  export default Task;