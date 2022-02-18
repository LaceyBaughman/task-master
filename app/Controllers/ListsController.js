import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


function _drawList() {
  let template = ''
  const lists = ProxyState.lists
  lists.forEach(l => template += l.Template)
  document.getElementById('list').innerHTML = template
}

export class ListsController {
  constructor() {

    ProxyState.on('lists', _drawList)
    console.log('Lists controller loaded')


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
}
