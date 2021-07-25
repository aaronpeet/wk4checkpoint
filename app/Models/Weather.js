import { ProxyState } from "../AppState.js"

export default class Weather {
    constructor(data) {
        this.name = data.name
        this.temp = data.main.temp

        
    }


    get Template() {
        return `
          <button class="btn btn-secondary" onclick="app.weatherController.toggleTemp()">
            <span class="${ProxyState.tempFahrenActive ? 'tempHidden' : ''}">Temp: ${this.tempChangeC(this.temp)} &deg;C</span>
            <span class = "${ProxyState.tempFahrenActive ? '' : 'tempHidden'}">Temp: ${this.tempChangeF(this.temp)} &deg;F</span>
            <span>City: ${this.name}</span>
        </button>
        `
    }
     tempChangeF(value) {
       return Math.floor((value-273.15)*1.8)+32
     }
    
    tempChangeC(value) {
        return Math.floor(value-273.15)
    }
}