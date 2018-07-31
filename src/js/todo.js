export class Todo {
   constructor({ value = "", completed = false }) {
     this.value = value;
     this.completed = completed;
   }

   toHtmlString(props) {
     return `
      <li data-index="${props.index}" data-completed="${this.completed}">
        <input type="checkbox" id="cc" ${this.completed ? 'checked' : ''}>
        <label for="cc">${this.value}</label>
        <button type="button" data-action="delete" class="btn btn-danger">✖</button>
        <button type="button" data-action="edit" class="btn btn-warning">✎</button>
      </li>`;
   }
}
