

export default class Weather {
    constructor(data) {
        this.name = data.name
        this.temp = data.main.temp

        
    }


    get Template() {
        return `
        <p>Temp: ${this.temp}</p>
        <p>City: ${this.name}</p>
        `
    }
}