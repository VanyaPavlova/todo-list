import '../sass/style.scss';
import {Todo} from './todo.js';
import {TodoList} from './todo-list.js';

const t1 = new Todo({ value: 'To-Do-Item-1', completed: true });
const t2 = new Todo({ value: 'To-Do-Item-2', completed: false });
const t3 = new Todo({ value: 'To-Do-Item-3', completed: true });
const t4 = new Todo({ value: 'To-Do-Item-4', completed: false });
const t5 = new Todo({ value: 'To-Do-Item-5', completed: true });
const t6 = new Todo({ value: 'To-Do-Item-6', completed: false });

const list = new TodoList({ todos: [] });

const ui_list = document.getElementById("js-todo-list");
const html = list.toHtmlString();

console.log(html);
ui_list.innerHTML= html;

