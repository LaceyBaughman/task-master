import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { ProxyState } from "../AppState.js"



export class TasksController {

  constructor() {

    ProxyState.on('lists', saveState);
    ProxyState.on('tasks', saveState);

    loadState()
  }
  createTask(listId) {
    window.event.preventDefault()
    const form = window.event.target

    const newTask = {
      listId: listId,
      checked: false,
      // @ts-ignore
      name: form.name.value
    }
    tasksService.createTask(newTask)
  }


  async deleteTask(id) {
    const yes = await Pop.confirm('Remove task?')
    if (yes) {
      tasksService.deleteTask(id)
    }
  }

  checkBox(id) {
    tasksService.checkBox(id)
  }


}