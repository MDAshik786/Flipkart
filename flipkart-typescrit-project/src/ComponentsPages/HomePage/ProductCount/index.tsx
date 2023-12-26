import ButtonFiled from "../../../CommonUsedComponents/ButtonField";
import InputFiled from "../../../CommonUsedComponents/InputField";
import "./index.scss";
import { ProductCountProps } from "../../../Types";
import { useStore } from "../../../ContextHooks/UseStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const ProductCount = observer(
  ({ product, quantity, quantityApiFunction, id }: ProductCountProps) => {
    const {
      rootStore: { productCounterStore, cartStore },
    } = useStore();
    const { addQuantityFunction } = productCounterStore;

    useEffect(() => {
      if (quantity) addQuantityFunction(product.id, quantity);
    }, []);

    return (
      <div className="number-container">
        <ButtonFiled
          className="symbol"
          content="-"
          onClick={() => {
            productCounterStore?.decrementAProductCounter(product?.id);
            quantityApiFunction &&
              quantityApiFunction.mutateAsync({
                id,
                quantity: Number(
                  productCounterStore.getProductCounter[product.id]
                ),
              });
          }}
        />
        <InputFiled
          type="number"
          className={"number"}
          value={
            productCounterStore.getProductCounter[product?.id]
              ? productCounterStore.getProductCounter[product?.id]
              : quantity
              ? quantity
              : 1
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            productCounterStore?.addAProductCounter(
              product.id,
              Number(e.target.value)
            );
            quantityApiFunction &&
              quantityApiFunction.mutateAsync({
                id,
                quantity: Number(
                  productCounterStore.getProductCounter[product.id]
                ),
              });
          }}
        />
        <ButtonFiled
          className="symbol"
          content="+"
          onClick={() => {
            productCounterStore?.incrementAProductCounter(product?.id);
            quantityApiFunction &&
              quantityApiFunction.mutateAsync({
                id,
                quantity: Number(
                  productCounterStore.getProductCounter[product.id]
                ),
              });
          }}
        />
      </div>
    );
  }
);

export default ProductCount;
