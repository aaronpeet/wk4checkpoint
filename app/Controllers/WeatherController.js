import { ProxyState } from "../AppState.js"
import { weatherService } from "../Services/WeatherService.js"

function _draw() {
    
    document.getElementById('weather').innerHTML = ProxyState.weather.Template
}

export default class WeatherController{
    constructor() {
       
        this.getWeather()
        ProxyState.on('weather', _draw)
        ProxyState.on('tempFahrenActive', _draw)
       _draw()
    }

    toggleTemp() {
      ProxyState.tempFahrenActive = !ProxyState.tempFahrenActive
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
        }
    }
}