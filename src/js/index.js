import '../sass/style.scss';
import {Todo} from './todo.js';

const t1 = new Todo({ value: 'To-Do-Item-1', completed: true });
const t2 = new Todo({ value: 'To-Do-Item-2', completed: false });
const t3 = new Todo({ value: 'To-Do-Item-3', completed: true });
const t4 = new Todo({ value: 'To-Do-Item-4', completed: false });
const t5 = new Todo({ value: 'To-Do-Item-5', completed: true });
const t6 = new Todo({ value: 'To-Do-Item-6', completed: false });

const list = [t1,t2,t3,t4,t5,t6];

const ui_list = document.getElementById("js-todo-list");
const html = list.map((item) => item.toHtmlString()).join('');

console.log(html);
ui_list.innerHTML= html;

