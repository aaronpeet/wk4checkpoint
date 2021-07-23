import { api } from "../Services/AxiosService.js"
import { ProxyState } from "../AppState.js"
import Weather from "../Models/Weather.js"

class WeatherService{
    
    async getWeather() {
        const res = await api.get('weather')
        ProxyState.weather = new Weather(res.data)
        console.log('pulled from proxy', ProxyState.weather)
       
}
}

export const weatherService = new WeatherService()