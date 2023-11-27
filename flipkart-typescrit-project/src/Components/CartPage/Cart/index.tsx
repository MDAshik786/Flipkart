import './index.scss'
import Address from "../Address"
import CartPriceDetails from "../CartPriceDetails"
import CartwholeProduct from "../CartWholeProduct"

const Cart = () => {


  return (
   <div className="cart-main">
    <div className='cart-main-left'>
    <Address/>
    <CartwholeProduct/>
   </div>
    <CartPriceDetails/>
    </div>
  )
}

export default Cart