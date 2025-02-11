import React, { FC } from "react";
import { TProduct } from "../../utils/types";
import { ProductCardUI } from "../ui/product-card/product-card";
import { useDispatch } from "../../services/store";
import { deleteProduct, likeProduct } from "../../services/productSlice";

type ProductCardProps = {
  product: TProduct;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleLike = (id: number) => {
    dispatch(likeProduct(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProduct(id));
  };

  return (
    <ProductCardUI
      product={product}
      onLike={handleLike}
      onDelete={handleDelete}
    />
  );
};
