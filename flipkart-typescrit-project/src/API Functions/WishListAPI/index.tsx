import { addToWishListUrl, getAllWishListProductUrl, getspecificWishListProductUrl } from "../../Utils_/APIUrls"
import { email } from "../CartPageAPI"
import axios from 'axios'

export const getSpecificWhishListProduct = async () => {
  try{
    const response = await axios.get(`${getspecificWishListProductUrl}/${email}`)
    // console.log(response.data,"getSpecificWishList")
    return response.data
  }
  catch(e){
    console.log(e,"getSpecificWhishListProduct")
  }
}

export const getAllWhishListProduct = async () => {
  try{
    const response = await axios.get(`${getAllWishListProductUrl}/${email}`)
    // console.log(response.data)
    return response.data
  }
  catch(e){
    console.log(e,"getAllWhishListProduct")
  }
}

export const AddToWishList = async () => {
    try {
      const response = await axios.post(`${addToWishListUrl}/${email}` , )
    }
    catch(e){
        console.log(e, "AddToWishList")
    }
}