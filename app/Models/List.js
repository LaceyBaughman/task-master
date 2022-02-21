import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"

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

            <div class="rounded-top text-center p-3" style="background-color:${this.color}">
              <h1 class="m-4 justify-content-between">
                ${this.name.toUpperCase()}
                <i class="mdi mdi-delete selectable" title="delete task"
                  onclick="app.listsController.deleteList('${this.id}')"></i>
              </h1>
            </div>

            <!-- SECTION Tasks List -->
            <div class="m-4" id="task">

                
              ${this.TaskTemplate}

            </div>

            <!-- SECTION TASKS FORM  -->
            <form class="px-3 pb-2" onsubmit="app.tasksController.createTask('${this.id}')">
              <div class="input-group">
                <input required minlength="3" maxlength="50" type="text" name="List Name" id="name" aria-describedby="helpId" class="form-control" placeholder="Add Task..." aria-label="Add Task">
                <button class="btn btn-outline-secondary" id="button-addon2"><i
                    class="mdi mdi-plus" ></i></button>
              </div>
            </form>







          </div>
        </div>
      
    `
  }

  get TaskTemplate() {
    let template = ''
    const myTasks = ProxyState.tasks.filter(t => t.listId == this.id)
    myTasks.forEach(t => template += t.TaskTemplate)
    return template

  }
}