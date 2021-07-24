

export default class Image{
    constructor(data) {
        this.imgUrl = data.imgUrl
    }
    
    get Template() {
        return `
            <img src="${this.imgUrl}" alt="">
        `
    }
}