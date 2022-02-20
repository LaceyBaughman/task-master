import { generateId } from "../Utils/generateId.js"



export class Task {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.listId = data.listId
    this.check = data.check || false
  }


  get TaskTemplate() {
    return `
    <div class="form-check">
    <input class="form-check-input strikethrough" type="checkbox" ${this.check ? "checked" : ""} id="checks">
    <label class="form-check-label" for="flexCheckDefault">
    ${this.name}
    </label>
    <i class="mdi mdi-delete selectable" title="delete ${this.name}" onclick="app.tasksController.deleteTask('${this.id}')"></i>
  </div>
  `
  }
}

