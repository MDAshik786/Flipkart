import './index.scss'
import Address from "../Address"
import CartPriceDetails from "../CartPriceDetails"
import CartwholeProduct from "../CartWholeProduct"
import CartHeader from '../CartHeader'
import { observer } from 'mobx-react-lite'

const Cart = () => {


  return (
    <>
    <CartHeader />
   <div className="cart-main">
    <div className='cart-main-left'>
    <Address/>
    <CartwholeProduct/>
   </div>
    <CartPriceDetails/>
    </div>
    </>
  )
}

export default observer(Cart)