import "./index.scss";
import { useQuery } from "@tanstack/react-query";
import { getAllWhishListProduct } from "../../../API Functions/WishListAPI";
import { useStore } from "../../../ContextHooks/UseStore";
import {
  SingleProduct,
  SingleWishListProductType,
  productTypeData,
} from "../../../Types";
import SingleWishListProduct from "../SingleWishListProduct";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const MyWishListProduct = observer(() => {
  const {
    rootStore: { wishListStore, userStore },
  } = useStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["wishlistAllProduct"],
    queryFn: () => getAllWhishListProduct(userStore.email),
  });

  useEffect(() => {
    wishListStore.setFunctionAllWishlistProduct(data || []);
  },[data])
 
  return (
    <div className="my-wishlist-product">
      <h4 className="head">My WishList ({wishListStore.allWishListProduct.length})</h4>

      <div>
        {wishListStore.allWishListProduct &&
          wishListStore.allWishListProduct.map(
            (product: productTypeData, index: number) => (
              <SingleWishListProduct data={product} key={index} />
            )
          )}
      </div>
    </div>
  );
});

export default MyWishListProduct;
