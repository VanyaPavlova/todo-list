export class TodoListEventHandler {

  static delegatedTodoItemClick(event, todoList) {
    event.preventDefault();
    console.log(event.target);

    const target = event.target;
    const nodeName = event.target.nodeName;
 
    if (nodeName === 'BUTTON') {
      // debugger;
      const action = target.dataset.action;
      const li = target.parentElement.parentElement;
      const index = Number(li.dataset.index);

      if (action === 'delete') {
         todoList.removeItem(index);
         todoList.render();
         todoList.saveToLocalStorage();
      }

      if (action === 'edit' || action === 'cancel') {
          li.querySelector('.item-default-view').classList.toggle('is-hidden');
          li.querySelector('.item-edit-view').classList.toggle('is-hidden');
          li.querySelector('.js-edit-input').focus();
      }

      if (action === 'save') {
         const value = li.querySelector('.js-edit-input').value;
         todoList.editItem(index, value);
         todoList.render();
         todoList.saveToLocalStorage();
      }
    }
    
    if (nodeName === 'INPUT') {
       if (target.classList.contains('js-edit-input')) {
         return;
       }
    }

    if (nodeName === 'INPUT' || nodeName === 'LABEL') {
        const li = target.parentElement.parentElement;
        const index = Number(li.dataset.index);
        todoList.toggleItem(index);
        todoList.render();
        todoList.saveToLocalStorage();
    }

  }

  static onAddItem(event, todoList, value) {
     todoList.addItem(value);
     todoList.render();
     todoList.saveToLocalStorage();
  }

}
