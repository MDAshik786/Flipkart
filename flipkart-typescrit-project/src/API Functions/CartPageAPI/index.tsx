import axios  from 'axios'
import { getAllCartProductUrl } from '../../Utils_/APIUrls'
export const getAllCartData = async () => {
    try{
        const response = await axios.get(getAllCartProductUrl)
        console.log(response.data)
        return response.data
    }
    catch(error){
        console.log(error,"getAllCartData")
    }
}