import './index.scss'
import ButtonFiled from '../../../CommonUsedComponents/ButtonField'
import ImageField from '../../../CommonUsedComponents/ImageField'
import InputFiled from '../../../CommonUsedComponents/InputFiled'
import { BiSearchAlt } from 'react-icons/bi';
import img from  '../../../Asserts/Images/fk-plus.png'


const CartHeader = () => {
  return (
    <div className='cart-header'>
       <div className='cart-header-left'>
       <ImageField src={img} alt='FlipKart' />
      <div className='cart-header-input-div'>
      <InputFiled type='text' className='cart-header-input' placeholder='Search for product, brands and more' />
       <ButtonFiled content={<BiSearchAlt className='cart-header-icon'/> }className={'cart-header-input-button'} />
      </div>

     </div>
     <div className="cart-header-user">
        <p className='cart-header-name'>Mohamed</p>
     </div>
    </div>
  )
}

export default CartHeader