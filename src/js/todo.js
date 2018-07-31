export class Todo {
   constructor({ value = "", completed = false }) {
     this.value = value;
     this.completed = completed;
   }

   toHtmlString(props) {
     return `
      <li>
        <label>
        	<input type="checkbox" ${this.completed ? 'checked' : ''}>
            ${this.value}
        </label>
        <button type="button" data-action="edit">Edit</button>
        <button type="button" data-action="delete">Delete</button>
      </li>`;
   }
}
