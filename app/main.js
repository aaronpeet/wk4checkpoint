import WeatherController from "./Controllers/WeatherController.js"
import QuotesController from "./Controllers/QuotesController.js"
import ImageController from "./Controllers/ImageController.js"
import ClockController from "./Controllers/ClockController.js"

class App {
 
  weatherController = new WeatherController()
  
  quotesController = new QuotesController()
  
  imageController = new ImageController()

  clockController = new ClockController()


}

window["app"] = new App();
