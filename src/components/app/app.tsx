import { useEffect } from "react";
import "../../index.css";
import { ProductList } from "../product-list/product-list";
import { Header } from "../ui/header/header";
import { useDispatch } from "../../services/store";
import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { fetchProducts } from "../../services/productSlice";

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
          <Route path="/" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
