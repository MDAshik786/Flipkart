import { ImageFiledProps } from '../../Types'

const ImageField = ({src, alt, className, ref} : ImageFiledProps ) => {
  return (
   <img src={src} alt={alt} className={className} ref={ref}/>
  )
}

export default ImageField