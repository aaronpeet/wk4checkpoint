import { api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js"
import Image from "../Models/Image.js"

class ImageService{

    async getImage() {
        const res = await api.get('images')
        ProxyState.images = new Image(res.data)
        console.log('Img from ProxyState', ProxyState.images)
    }
    

}

export const imageService = new ImageService()