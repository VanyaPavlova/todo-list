import {Todo} from './todo.js';

export class TodoList {
  constructor({ todos = [] }) {
     this.todos = todos;
  }

  toHtmlString() {
    const html = this.todos.map((item) => item.toHtmlString()).join('');
    return html;
  }
  
  addItem(value = '') {
    if (!value) { 
      return; 
    }
    const newTodo = new Todo ({ value: value });
    this.todos.push(newTodo);  
  }

  editItem(index, value) {
     this.todos[index].value = value;
  }
  
  removeItem(index) {
     return this.todos.splice(index, 1)[0];
  }
  
  toggleItem(index) {
     this.todos[index].completed = !this.todos[index].completed;
  }

  getAllItems() {
     return this.todos;
  }

}
