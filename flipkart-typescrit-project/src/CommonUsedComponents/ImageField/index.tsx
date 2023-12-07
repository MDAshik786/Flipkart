import { ImageFiledProps } from '../../Types'
import { forwardRef } from 'react'
import { refImage } from '../../Types/Name&Type'

const ImageField = forwardRef(function ImageField({src, alt, className} : ImageFiledProps, ref: refImage ){
  return (
   <img src={src} alt={alt} className={className} ref={ref}/>
  )
})

export default ImageField