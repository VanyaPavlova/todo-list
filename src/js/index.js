import '../sass/style.scss';
import {Todo} from './todo.js';

const t1 = new Todo({ value: 'test1', completed: true });
const t2 = new Todo({ value: 'test2', completed: false });

console.log(t1,t2);
