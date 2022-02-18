import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"


export class Task {
  constructor(data) {
    this.id - generateId(),
      this.name = name,
      this.listId = data.pizzaId

  }


  get Template() {

    return `
    
    <div class="m-4">

              <div class="form-check mx-4 justify-content-between">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
                <i class="mdi mdi-delete selectable" title="delete task"
                  onclick="app.tasksController.deleteList('${this.id}')"></i>
              </div>

              <div class="form-check mx-4 justify-content-between">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
                <i class="mdi mdi-delete selectable" title="delete task"
                  onclick="app.tasksController.deleteList('${this.id}')"></i>
              </div>

    </div>
    `
  }

}