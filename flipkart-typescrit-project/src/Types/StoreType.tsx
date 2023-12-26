import { CartSingleProducts } from ".";

export type checkOutStoreType = {
    login: boolean,
    DeliveryAddress: boolean,
    newAddress: boolean,
    orderSummary: boolean,
    paymentOption: boolean,
};

export type cartStoreType = {
    cartItems : CartSingleProducts[],
    discountCost : number,
    totalCost : number,
    totalDiscountPrice : number
  }