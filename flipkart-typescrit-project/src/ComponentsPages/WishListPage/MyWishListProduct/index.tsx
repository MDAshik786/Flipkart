import "./index.scss";
import { useStore } from "../../../ContextHooks/UseStore";
import { productTypeData } from "../../../Types";
import SingleWishListProduct from "../SingleWishListProduct";
import { observer } from "mobx-react-lite";
import AllWishListQuery from "../../../APIQueryFunction/WishListQuery/AllWishListQuery";

const MyWishListProduct = observer(() => {
  const {
    rootStore: { wishListStore, userStore },
  } = useStore();

  const { data, isLoading, error, refetch } = AllWishListQuery(userStore.email);

  if (isLoading) return <>Loading</>;

  return (
    <div className="my-wishlist-product">
      <h4 className="head">
        My WishList ({wishListStore.allWishListProduct.length})
      </h4>

      <div className="allwishlist">
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
