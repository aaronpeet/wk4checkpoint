import WeatherController from "./Controllers/WeatherController.js"
import QuotesController from "./Controllers/QuotesController.js"

class App {
 
  weatherController = new WeatherController()
  quotesController = new QuotesController()

}

window["app"] = new App();
