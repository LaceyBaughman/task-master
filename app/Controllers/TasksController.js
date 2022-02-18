import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"

export class TasksController {
  createTask(listId) {
    window.event.preventDefault()
    const form = window.event.target

    const newList = {
      listId,
      name: form.name.value
    }
    console.log("[TasksController]: createTask", newTask)
    tasksService.createTask(newTask)
  }

  async deleteTask(id) {
    // NOTE CONFIRM DELETE
    if (await Pop.confirm()) {
      tasksService.deleteTask(id)
    }
  }
}
