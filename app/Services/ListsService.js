import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";


class ListsService {
  createList(newList) {
    const list = new List(newList)
    ProxyState.lists = [...ProxyState.lists, list]
    console.log('Service, got the List', list)
  }

  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
  }


}
export const listsService = new ListsService();



