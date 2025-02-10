import { useEffect } from "react";
import "../../index.css";
import { Header } from "../ui/header/header";
import { useDispatch } from "../../services/store";
import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { fetchProducts } from "../../services/productSlice";
import { ProductDetailsPage } from "../../pages/product-detail-page";
import { ProductsPage } from "../../pages/products-page";
import { HomePage } from "../../pages/home-page";
import { CreateProductPage } from "../../pages/create-product-page";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={styles.app}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/create- product" element={<CreateProductPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
