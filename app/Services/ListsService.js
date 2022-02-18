import { ProxyState } from "../AppState.js";
import { Lists } from "../Models/List.js";

class ListsService {
  addValue() {
    ProxyState.lists = [...ProxyState.lists, new Value({ title: Math.random() })]
  }
  removeValue(id) {
    const lists = ProxyState.lists.filter(v => v.id !== id)
    ProxyState.lists = lists
  }
}

export const listsService = new ListsService();


