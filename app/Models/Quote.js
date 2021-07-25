

export default class Quote{
    constructor({content, author}) {
        this.content = content
        this.author = author
    }

    get Template() {
        return `
        <div class="content">
          <h4>${this.content}</h4>
          <p class="author"><em>${this.author}</em></p>
        </div>

        `
    }
}