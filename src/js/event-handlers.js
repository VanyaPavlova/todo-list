export class TodoListEventHandler {

  static delegatedTodoItemClick(event, todoList) {
    event.preventDefault();

    const target = event.target;
    const nodeName = event.target.nodeName;
 
    if (nodeName === 'BUTTON') {
      // debugger;
      const action = target.dataset.action;
      const li = target.parentElement;
      const index = Number(li.dataset.index);

      if (action === 'delete') {
         todoList.removeItem(index);
         todoList.render();
         todoList.saveToLocalStorage();
      }

      if (action === 'edit') {
          window.alert('edit');
      }
    }
    
    if (nodeName === 'INPUT' || nodeName === 'LABEL') {
        const li = target.parentElement;
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
