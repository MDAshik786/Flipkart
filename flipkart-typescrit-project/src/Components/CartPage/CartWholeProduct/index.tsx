import ImageField from "../../../CommonUsedComponents/ImageField"
import { Product, SingleProduct } from "../../../Types"

const CartwholeProduct = () => {

    const data = [
        {
            id: 0,
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            priceCents: 22.2,
            priceIndia: 7343,
            ratingStar: 4,
            totalQuantity: 25,
            ratingCount: 5,
            description: "product description",
            keywords: [
                { id: 1, keyword: "dummy" }
            ]
        },
        {
            id: 1,
            image: "images/products/intermediate-composite-basketball.jpg",
            name: "Intermediate Size Basketball",
            priceCents: 22.2,
            priceIndia: 7343,
            ratingStar: 4,
            totalQuantity: 25,
            ratingCount: 5,
            description: "product description",
            keywords: [
                { id: 1, keyword: "dummy" }
            ]
        },
        {
            id: 2,
            image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
            name: "Adults Plain Cotton T-Shirt - 2 Pack",
            priceCents: 22.2,
            priceIndia: 7343,
            ratingStar: 4,
            totalQuantity: 25,
            ratingCount: 5,
            description: "product description",
            keywords: [
                { id: 1, keyword: "dummy" }
            ]
        }
    ]
    return (
        <div>
            {data &&
                data.map((product: SingleProduct, index: number) => {
                    return (
                        <div className="cart-single-product">
                            <ImageField src={`http://localhost:3000/${product?.image}`} className="cart-page-img" alt="" />
                       
                        <div className="cart-details">

                        </div>
                        <p className="cart-deliver-date">

                        </p>
                        </div>  
                    )
                })}
        </div>
    )
}

export default CartwholeProduct