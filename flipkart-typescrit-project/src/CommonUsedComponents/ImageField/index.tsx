import { ImageFiledProps } from '../../Types'

const ImageField = ({src, alt, className} : ImageFiledProps ) => {
  return (
   <img src={src} alt={alt} className={className}/>
  )
}

export default ImageField