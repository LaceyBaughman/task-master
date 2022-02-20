import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

export class TasksController {
  createTask(listId) {
    window.event.preventDefault()
    const form = window.event.target

    const newTask = {
      listId: listId,
      // @ts-ignore

      name: form.name.value
    }
    console.log('TaskControl: create task.', newTask)
    tasksService.createTask(newTask)
  }


  async deleteTask(id) {
    console.log('delete task', id);
    tasksService.deleteTask(id)
    if (await Pop.confirm()) {
      tasksService.deleteTask(id)
    }
  }
}
