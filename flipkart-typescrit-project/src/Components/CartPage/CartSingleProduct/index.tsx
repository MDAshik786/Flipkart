
import ImageField from "../../../CommonUsedComponents/ImageField";
import { CartSingleProductProps } from "../../../Types";
import { BiSolidStar } from "react-icons/bi";
import ProductCount from "../../HomePage/ProductCount";

const CartSingleProduct = ({products} :CartSingleProductProps ) => {
    const {product} = products
  return (
    <div className="cart-product-allData" >
    <div className="cart-product-img-container">
      <ImageField
        src={`http://localhost:3000/${product?.image}`}
        className="cart-product-img"
        alt=""
      />
    </div>
    <div className="cart-product-details">
      <p className="cart-product-name">{product?.name}</p>
      <div className="rating-container">
        <div className="single-rating-number">
          {product?.ratingStar}{" "}
          <BiSolidStar className="bsStar-icon" />
        </div>
        <span>{product?.ratingCount} rating</span>
      </div>

      <div className="single-price-container">
        <span>₹</span>
        <span>{product?.priceIndia}</span>
      </div>
      <div className="cart-product-about-container">
       <span>About:</span> <p>{product?.description}</p>
      </div>
      <div className="single-quantity-conatiner">
        <span>Quantity:</span>
        <span>{products.quantity}</span>
        <ProductCount product={products} quantity = {products.quantity} />
      </div>
      <div className='cart-product-action-container'>
        <p className="cart-product-action">Update</p>
        <p className="cart-product-action">Delete</p>
      </div>
    </div>

    <p className="cart-deliver-date">Delivery by Tue Nov 28 | Free</p>
  </div>
  )
}

export default CartSingleProduct