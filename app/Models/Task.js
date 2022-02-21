import { generateId } from "../Utils/generateId.js"




export class Task {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.listId = data.listId
    this.checked = data.checked
  }

  get TaskTemplate() {
    return `
    <div class="m-2">
    <h3><input onclick="app.tasksController.checkBox('${this.id}')" type="checkbox" id="${this.id}" name="${this.id}"
    ${this.checked ? 'checked' : ''}>
    <label class="mx-2" for="${this.id}" style="${this.checked ? 'text-decoration: line-through;'
        : ''
      }">${this.name}</label>
  
  <i class="mdi mdi-delete selectable" title="delete ${this.name}" onclick="app.tasksController.deleteTask('${this.id}')"></i>
  </h3></div>
  `
  }
}

