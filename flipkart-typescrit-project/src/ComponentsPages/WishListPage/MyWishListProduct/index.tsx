import './index.scss'
import { useQuery } from "@tanstack/react-query";
import { getAllWhishListProduct } from "../../../API Functions/WishListAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import { Product } from "../../../Types";
import SingleWishListProduct from "../SingleWishListProduct";

const MyWishListProduct = () => {
  const {
    rootStore: { wishListStore },
  } = useStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["wishlistAllProduct"],
    queryFn: () => getAllWhishListProduct(),
  });

  wishListStore.setFunctionAllWishlistProduct(data);

  return (
    <div className="my-wishlist-product">
      <h4 className='head'>My WishList(302)</h4>

      <div>
        {data &&
          data.map((product: Product, index: number) => (
            <SingleWishListProduct product={product}  key={index}/>
          ))}
      </div>
    </div>
  );
};

export default MyWishListProduct;
