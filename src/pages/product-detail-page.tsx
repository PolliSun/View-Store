import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchProductById,
  getProductByIdState,
} from "../services/productSlice";
import { useDispatch, useSelector } from "../services/store";
import { ProductDetailUI } from "../components/ui/product-detail/product-detail";

export const ProductDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const product = useSelector(getProductByIdState);

  const handleBack = () => {
    navigation(-1);
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(Number(id)));
    }
  }, [dispatch, id]);

  if (!product) {
    return <p>Not found</p>;
  }

  return <ProductDetailUI product={product} onBack={handleBack} />;
};
