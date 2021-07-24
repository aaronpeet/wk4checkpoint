import { ProxyState } from "../AppState.js"
import { quotesService } from "../Services/QuotesService.js"

function _draw() {
    document.getElementById('quote').innerHTML = ProxyState.quotes.Template
}

export default class QuotesController{
    constructor() {
        
        ProxyState.on('quote', _draw)
        
        _draw

    }

    async getQuote() {
        try {
           await quotesService.getQuote() 
        } catch (error) {
            console.error(error)
        }
    }
}