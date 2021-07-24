import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"


function _draw() {
    document.getElementById('image').innerHTML = ProxyState.images.Template
}

export default class ImageController{
    constructor() {
        
       // ProxyState.on('image', _draw)
        this.getImage()
        _draw()
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            console.error('couldnt get image', error)
        }
    }
}