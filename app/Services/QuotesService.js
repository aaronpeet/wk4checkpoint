import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"
import Quote from "../Models/Quote.js"

class QuotesService{

    async getQuote() {
        const res = await api.get('quotes')
        ProxyState.quotes = new Quote(res.data)
        console.log('pulled from ProxyState', ProxyState.quotes)
    }

}

export const quotesService = new QuotesService()