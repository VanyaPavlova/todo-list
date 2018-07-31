import '../sass/style.scss';
import {Todo} from './todo.js';
import {TodoList} from './todo-list.js';
import {TodoListEventHandler} from './event-handlers.js';

const ENTER_KEY_CODE = 13;

function init() {

  const ui_list = document.querySelector('#js-todo-list');	
  const add_new_todo_input = document.querySelector('#js-todo-input');
  const add_new_todo_button = document.querySelector('#js-add-todo-button');
  const selected_filter_span = document.querySelector('#js-selected-filter');
  const filter_buttons = Array.from(document.querySelectorAll('.js-filter-button'));

  const todoList = new TodoList({ ul: ui_list, restoreFromLocalStorage: true });

  ui_list.addEventListener('click', (event) => {
    TodoListEventHandler.delegatedTodoItemClick(event, todoList);
  });
  
  add_new_todo_input.addEventListener('keydown', (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      const value = add_new_todo_input.value.trim();
      TodoListEventHandler.onAddItem(event, todoList, value);
      add_new_todo_input.value = '';
      add_new_todo_input.focus();
    }
  });

  add_new_todo_button.addEventListener('click', (event) => {
    const value = add_new_todo_input.value.trim();
    TodoListEventHandler.onAddItem(event, todoList, value);
    add_new_todo_input.value = '';
    add_new_todo_input.focus();
  });

  filter_buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const filter = btn.dataset.filter;
        ui_list.classList.remove('filter-all');
        ui_list.classList.remove('filter-active');
        ui_list.classList.remove('filter-completed');
        ui_list.classList.add(`filter-${filter}`);
        selected_filter_span.innerText = filter;
    });
  });
  
  todoList.render();

}

  init();
