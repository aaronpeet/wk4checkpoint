

export default class Todo{
    constructor(data) {
        this.completed = data.completed
        this.id = data.id
        this.description = data.description
    }

    get Template() {
        return `
           <p> <input type="checkbox" id="item" name="name"> ${this.description}
           <span class="action" onclick="app.todosController.removeItem(${this.id})"> X</span></p>
        `
    }
}