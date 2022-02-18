import { List } from "./Models/List"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

const newList = new List({})

const newTask = new Task({})
class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */
  lists = [newList]

  /** @type {import('./Models/Task').Task[]} */
  tasks = [newTask]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
