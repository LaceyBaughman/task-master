import { ValuesController } from "./Controllers/ListsController.js";

class App {
  valuesController = new ValuesController();
}

window["app"] = new App();

