import axios from 'axios'
import { getSingleProductDataUrl } from '../../Utils_/APIUrls'

export const getSingleProductData =  async (id : number | undefined) => {

  if(id){
    try{
        const response = await axios.get(`${getSingleProductDataUrl}/${id}`)
        console.log(response.data, id, "aaaaa")
        return response.data;
    }
    catch(e) {
        console.log(e, "getSingleProductData")
    }
  }
}