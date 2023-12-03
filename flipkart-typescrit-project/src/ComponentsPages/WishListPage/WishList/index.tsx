import './index.scss'
import MyAccount from '../MyAccount'
import MyOrderHeader from '../MyOrderHeader'
import MyWishListProduct from '../MyWishListProduct'
import CartHeader from '../../CartPage/CartHeader'

const WishList = () => {
  return (
    <>
    <CartHeader />
    <div className='wishlist'>
       <div className="wishlist-left">
       <MyAccount />
       <MyOrderHeader />
       </div>
       <MyWishListProduct />
    </div>
    </>
  )
}

export default WishList