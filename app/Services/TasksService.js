import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/LocalStorage.js"



class TasksService {
  createTask(newTask) {
    const task = new Task(newTask)
    ProxyState.tasks = [...ProxyState.tasks, task]
    console.log('TaskService: got Task', task)
  }
  checkBox(id) {
    const tasks = ProxyState.tasks
    const found = tasks.find(task => id == task.id)
    found.checked = !found.checked
    ProxyState.tasks = ProxyState.tasks
    saveState()
  }
  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
}

export const tasksService = new TasksService()


