import { ProxyState } from "../AppState.js";
import { ListsService } from "../Services/ListsService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _draw() {
  let lists = ProxyState.lists;
  let listsTemplate = ''
  lists.forEach(v => listsTemplate += v.CardTemplate)
  document.getElementById("app").innerHTML = /*html*/`
  <div class="my-3">
    <button class="btn btn-secondary text-white elevation-2" onclick="app.listsController.addValue()">Add Value</button>  
    <div class="lists d-flex flex-wrap my-3">
      ${listsTemplate}
    </div>
  </div>
  `
}

//Public
export class ListsController {
  constructor() {
    ProxyState.on("list", _draw);
    _draw()
  }

  addValue() {
    listsService.addValue()
  }

  async removeList(id) {
    const yes = await Pop.confirm('Remove Value')
    if (yes) {
      listsService.removeList(id)
    }
  }

}

