import { myapi } from "../Services/AxiosService.js"
import { ProxyState } from "../AppState.js"
import Todo from "../Models/Todo.js"



class TodosService{

    async createListItem(rawListItem) {
        const res = await myapi.post('listItem', rawListItem)
        ProxyState.listItem = [...ProxyState.listItem, new Todo(res.data)]
}

    async deleteListItem(itemId) {
        const res = await myapi.delete('todos/' + itemId)
        ProxyState.listItem = ProxyState.listItem.filter(i => i.id != itemId)
    }

    async itemCompleted(itemId) {
        let foundItem = ProxyState.listItem.find(i => i.id == itemId)
        if (foundItem.completed == false) {
            foundItem.completed = true
        } else {
            foundItem.completed = false
        }
        const res = await myapi.put()
    }
}

export const todosService = new TodosService()