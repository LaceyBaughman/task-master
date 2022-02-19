import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _drawList() {
  let template = ''
  const lists = ProxyState.lists
  lists.forEach(l => template += l.Template)
  document.getElementById('list').innerHTML = template
}
export class ListsController {
  constructor() {
    ProxyState.on('lists', _drawList)
    ProxyState.on('tasks', _drawList)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)
    console.log('Lists controller loaded')

    loadState()
  }

  createList() {
    window.event.preventDefault()
    const form = window.event.target

    const newList = {
      name: form.name.value,
      color: form.color.value
    }
    listsService.createList(newList)
  }

  // deleteList(id) {
  //   listsService.deleteList.(id)
  // }
}
