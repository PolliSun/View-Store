import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "../services/store";
import { createProduct } from "../services/productSlice";
import { TProduct } from "../utils/types";
import { ProductFormUI } from "../components/ui/product-form/product-form";
import { useNavigate } from "react-router-dom";

export const CreateProductPage: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleBack = () => {
    navigation(-1);
  };

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const [product, setProduct] = useState<Omit<TProduct, "id">>({
    title: "",
    description: "",
    image: "",
    price: 0.49,
    category: categories[0],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearForm = () => {
    setProduct({
      title: "",
      description: "",
      image: "",
      price: 0.49,
      category: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createProduct(product));
    clearForm();
    navigation("/products");
  };

  return (
    <ProductFormUI
      product={product}
      onSubmit={handleSubmit}
      categories={categories}
      onChange={handleChange}
      onBack={handleBack}
    />
  );
};
