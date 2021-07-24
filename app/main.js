import WeatherController from "./Controllers/WeatherController.js"
import QuotesController from "./Controllers/QuotesController.js"
import ImageController from "./Controllers/ImageController.js"

class App {
 
  weatherController = new WeatherController()
  
  quotesController = new QuotesController()
  
  imageController = new ImageController()

}

window["app"] = new App();
