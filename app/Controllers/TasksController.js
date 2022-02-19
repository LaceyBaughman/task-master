import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"

export class TasksController {
  createTask(listId) {
    window.event.preventDefault()
    const form = window.event.target

    const newTask = {
      listId: listId,
      name: form.name.value
    }
    console.log('TaskControl: create task.')
    tasksService.createTask(newTask)
  }


  async deleteTask(taskId) {
    console.log('delete task', taskId);
    tasksService.deleteTask(taskId)
    if (await Pop.confirm()) {
      tasksService.deleteTask(taskId)
    }
  }
}