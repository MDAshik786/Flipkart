import { ImageFiledProps } from '../../Types'
import { forwardRef } from 'react'

const ImageField = forwardRef(function ImageField({src, alt, className} : ImageFiledProps, ref:any ){
  return (
   <img src={src} alt={alt} className={className} ref={ref}/>
  )
})

export default ImageField