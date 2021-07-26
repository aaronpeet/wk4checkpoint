import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"


function _draw() {
    let template = ''
    ProxyState.listItem.forEach(i => {
        template += listItem.Template
    })
    document.getElementById('listItem').innerHTML = template
}


export default class TodosController{
    constructor() {
        
        ProxyState.on('listItem', _draw)
        
        _draw()

    }
    
    async createListItem() {
        try {
            event.preventDefault()
            let form = event.target
            let rawListItem = {
                description: form.description.value
            }
            await todosService.createListItem(rawListItem)
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

}