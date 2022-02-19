import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"

export class TasksController {
  createTask(listId) {
    window.event.preventDefault()
    let form = window.event.target

    let newTask = {
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