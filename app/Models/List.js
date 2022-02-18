import { generateId } from "../Utils/generateId.js"

export class List {
  constructor(data) {

    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }


  get Template() {
    return `
    <div class="col-md-4 p-3 card-height">
          <div class="rounded shadow bg-white">

            <div class="rounded-top text-center py-5 ${this.color}">
              <h1 class="m-4 justify-content-between">
                ${this.name.toUpperCase()}
                <i class="mdi mdi-delete selectable" title="delete task"
                  onclick="app.ListsController.deleteList('${this.id}')"></i>
              </h1>
            </div>

            <!-- SECTION Tasks List -->
            <div class="m-4">

              <div class="form-check mx-4 justify-content-between">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
                <i class="mdi mdi-delete selectable" title="delete task"
                  onclick="app.ListsController.deleteList('${this.id}')"></i>
              </div>

              <div class="form-check mx-4 justify-content-between">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                  Checked checkbox
                </label>
                <i class="mdi mdi-delete selectable" title="delete task"
                  onclick="app.ListsController.deleteList('${this.id}')"></i>
              </div>

            </div>

            <!-- SECTION TASKS FORM  -->
            <form class="px-3 pb-2" onsubmit="app.toppingsController.createTask('${this.id}')">
              <div class="input-group">
                <input maxlength="50" type="text" class="form-control" placeholder="Add Task..." aria-label="Add Task"
                  aria-describedby="topping" id="name">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i
                    class="mdi mdi-plus"></i></button>
              </div>
            </form>

          </div>
        </div>
      
    `
  }
}

