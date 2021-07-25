import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImageService.js"


function _draw() {
    //console.log("image draw: ", ProxyState.images.Template);
    document.getElementById('mainImage').style.backgroundImage = `url('${ProxyState.images.imgUrl}')`
}

export default class ImageController{
    constructor() {
        
        ProxyState.on('images', _draw)
        this.getImage()
    }

    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            console.error('couldnt get image', error)
        }
    }
}