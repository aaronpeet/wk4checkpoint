import { api } from "../Services/AxiosService.js"
import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"

class QuotesService{

    async getQuote() {
        const res = await api.get('quotes')
        console.log(res.data)
        ProxyState.quotes = new Quote(res.data)
        console.log('pulled from ProxyState', ProxyState.quotes)
    }

}

export const quotesService = new QuotesService()