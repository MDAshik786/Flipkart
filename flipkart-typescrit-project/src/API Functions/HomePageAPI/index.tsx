import axios from 'axios'
import { getAllProductUrl, getAllScrollingIamgesUrl, getAllTopRelatedTagsUrl } from '../../Utils_/APIUrls'
export const getAllTagImages = async () => {
    try{
        const response = await axios.get(getAllTopRelatedTagsUrl)
        return response.data
    }
    catch(error){
        console.log(error, "error on getAllTagImages")
    }
}
export const getAllScrollingImages = async () => {
    try{
        const response = await axios.get(getAllScrollingIamgesUrl)
        return response.data
    }
    catch(error){
        console.log(error, "error on getAllTagImages")
    }
}
export const getAllProduct = async () => {
    try{
        const response = await axios.get(getAllProductUrl)
        return response.data
    }
    catch(error){
        console.log(error, "error on getAllTagImages")
    }
}