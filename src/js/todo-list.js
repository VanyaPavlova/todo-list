import {Todo} from './todo.js';

export class TodoList {
  constructor({ todos = [], ul }) {
     this.todos = todos;
     this.ul = ul;
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
  
  toHtmlString() {
    const html = this.todos.map((item, index) => item.toHtmlString({index: index})).join('');
    return html;
  }

  render() {
    this.ul.innerHTML = this.toHtmlString();
  }

}
