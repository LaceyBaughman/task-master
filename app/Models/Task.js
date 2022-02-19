import { generateId } from "../Utils/generateId.js"



export class Task {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.listId = data.listId
  }


  get TaskTemplate() {
    return `
    

   
     <label class="form-check-label" for="flexCheckChecked">${this.name} </label>
    <i class="mdi mdi-delete selectable" title="delete ${this.name}" onclick="app.ListsController.deleteTask('${this.id}')"></i>
  `
  }
}


/* <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
<label class="form-check-label" for="flexCheckChecked">${this.name} </label>
<i class="mdi mdi-delete selectable" title="delete ${this.name}" onclick="app.ListsController.deleteTask('${this.id}')"></i> */



// get Template() {
//   return `<li class="d-flex justify-content-between">${this.name} <i class="mdi mdi-delete selectable" title="Delete ${this.name}" onclick="app.toppingsController.deleteTopping('${this.id}')"></i></li>`
// }

// }