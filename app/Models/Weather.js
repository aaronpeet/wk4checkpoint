

export default class Weather {
    constructor(data) {
        this.name = data.name
        this.temp = data.main.temp

        
    }


    get Template() {
        return `
        <p>Temp: ${this.tempChangeC(this.temp)} &deg;C</p>
        <p>Temp: ${this.tempChangeF(this.temp)} &deg;F</p>
        <p>City: ${this.name}</p>
        `
    }
     tempChangeF(value) {
       return Math.floor((value-273.15)*1.8)+32
     }
    
    tempChangeC(value) {
        return Math.floor(value-273.15)
    }
}