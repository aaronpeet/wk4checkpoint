import { myapi } from "../Services/AxiosService.js"
import { ProxyState } from "../AppState.js"
import Todo from "../Models/Todo.js"



class TodosService{

    constructor() {
    
        this.getAllItems()
}
   
    async getAllItems() {
    const res = await myapi.get()
    ProxyState.listItem = res.data.map(i => new Todo(i))
  }
   
    async createListItem(rawListItem) {
        const res = await myapi.post('', rawListItem)
        ProxyState.listItem = [...ProxyState.listItem, new Todo(res.data)]
        console.log('created new list item', ProxyState.listItem)
}

    async deleteListItem(itemId) {
        const res = await myapi.delete('/' + itemId)
        ProxyState.listItem = ProxyState.listItem.filter(i => i.id != itemId)
    }

    async itemCompleted(itemId) {
        let foundItem = ProxyState.listItem.find(i => i.id == itemId)
        if (foundItem.completed == false) {
            foundItem.completed = true
        } else {
            foundItem.completed = false
        }
        const res = await myapi.put('/' + itemId, foundItem)
        ProxyState.listItem = ProxyState.listItem
    }
}

export const todosService = new TodosService()