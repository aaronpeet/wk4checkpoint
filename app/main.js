import WeatherController from "./Controllers/WeatherController.js"
import QuotesController from "./Controllers/QuotesController.js"
import ImageController from "./Controllers/ImageController.js"
import ClockController from "./Controllers/ClockController.js"
import TodosController from "./Controllers/TodosController.js"

class App {
 
  weatherController = new WeatherController()
  
  quotesController = new QuotesController()
  
  imageController = new ImageController()

  clockController = new ClockController()

  todosController = new TodosController()


}

window["app"] = new App();
