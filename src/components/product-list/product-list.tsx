import React, { FC } from "react";
import { useSelector } from "../../services/store";
import { getProductsState } from "../../services/productSlice";
import { ProductListUI } from "../ui/product-list/product-list";

export const ProductList: FC = () => {
  const products = useSelector(getProductsState);

  return <ProductListUI products={products} />;
};
