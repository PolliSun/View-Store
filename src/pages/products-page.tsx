import React, { FC } from "react";
import { useDispatch, useSelector } from "../services/store";
import {
  getFilterState,
  getProductsState,
  setFilter,
} from "../services/productSlice";
import { ProductListUI } from "../components/ui/product-list/product-list";

export const ProductsPage: FC = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProductsState);
  const filter = useSelector(getFilterState);

  const handleFilterChange = (sortBy: "all" | "favorites") => {
    dispatch(setFilter(sortBy));
  };

  const filteredProducts =
    filter === "favorites"
      ? products.filter((product) => product.isLiked)
      : products;

  return (
    <>
      <ProductListUI
        products={filteredProducts}
        filter={filter}
        setFilter={handleFilterChange}
      />
      {filter === "favorites" && filteredProducts.length === 0 && (
        <span>Not favorite products</span>
      )}
    </>
  );
};
