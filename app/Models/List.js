import { generateId } from "../Utils/generateId.js"
import { ProxyState } from "../AppState.js"

export class Lists {
  constructor(data, id, name, color) {
    // if data has an id us it otherwise generate
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }


  get Template() {
    return /* html */`
    
      <!-- TASKS FORM  -->
      
    `
  }

  get TasksTemplate() {
    let template = ''
    const myToppings = ProxyState.tasks.filter(t => t.listId == this.id)
    myToppings.forEach(t => template += t.Template)
    return template
  }


  const myTasks = ProxyState.tasks.filter(t => t.listId == this.id)

    out += myTasks.length

    return out
  }
}