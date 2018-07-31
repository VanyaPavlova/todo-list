export class Todo {
   constructor({ value = "", completed = false }) {
     this.value = value;
     this.completed = completed;
   }

   toHtmlString(props) {
     return `
      <li data-index="${props.index}" data-completed="${this.completed}">
        <div class="item-default-view clearfix">
          <input type="checkbox" id="cc" ${this.completed ? 'checked' : ''}>
          <label for="cc">${this.value}</label>
          <button type="button" data-action="delete" class="btn btn-danger pull-right">✖</button>
          <button type="button" data-action="edit" class="btn btn-warning pull-right">✎</button>
        </div>
        <aside class="item-edit-view clearfix is-hidden">
          <input type="text" class=" js-edit-input form-control pull-left" value="${this.value}"/>
          <button type="button" data-action="cancel" class="btn btn-warning pull-right">✖</button>
          <button type="button" data-action="save" class="btn btn-success pull-right">✔</button>
        </aside>
      </li>`;
   }
}
