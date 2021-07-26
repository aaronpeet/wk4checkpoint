import {ProxyState} from "../AppState.js"

export default class Todo{
    constructor(data) {
        this.completed = data.completed
        this.id = data.id || data._id
        this.description = data.description
    }

    get Template() {
        return `
           <p> <input
                type="checkbox"
                id="item-${this.id}" 
                name="item"
                onclick="app.todosController.itemCompleted('${this.id}')" 
                ${this.completed ? 'checked' : ''} > 
           ${this.description}
           <span class="action" onclick="app.todosController.deleteListItem('${this.id}')"> X</span></p>
        `
    }
}