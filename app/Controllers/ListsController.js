import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _drawList() {
  let template = ''
  const lists = ProxyState.lists
  lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}
export class ListsController {
  constructor() {
    ProxyState.on('lists', _drawList)
    ProxyState.on('tasks', _drawList)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)

    loadState()
  }

  createList() {
    window.event.preventDefault()
    const form = window.event.target

    const newList = {
      // @ts-ignore
      name: form.name.value,
      // @ts-ignore
      color: form.color.value
    }
    listsService.createList(newList)
  }

  deleteList(id) {
    listsService.deleteList(id)
  }
}
