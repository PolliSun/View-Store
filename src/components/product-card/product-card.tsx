import React, { FC } from "react";
import { TProduct } from "../../utils/types";
import { ProductCardUI } from "../ui/product-card/product-card";

type ProductCardProps = {
  product: TProduct;
};

export const ProductCard: FC<ProductCardProps> = ({ product }) => {

    return (
        <ProductCardUI product={product}/>
    )
}