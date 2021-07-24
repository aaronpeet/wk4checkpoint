

export default class Quote{
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }

    get Template() {
        return `
        <h4>${this.content}</h4>
        <p><em>${this.author}</em></p>

        `
    }
}