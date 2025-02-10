import React, { FC } from "react";
import styles from "./product-list.module.css";
import { TProduct } from "../../../utils/types";
import { ProductCard } from "../../product-card/product-card";

type ProductListUIProps = {
  products: TProduct[];
  filter: string;
  setFilter: ( sortBy: "all" | "favorites") => void;
};

export const ProductListUI: FC<ProductListUIProps> = ({
  products,
  filter,
  setFilter,
}) => {
  return (
    <section className={styles.section}>
      <nav className={styles.navigation}>
        <button
          className={`${styles.button} ${
            filter === "all" ? styles.active : ""
          }`}
          onClick={() => setFilter("all")}
        >
          all
        </button>
        <button
          className={`${styles.button} ${
            filter === "favorites" ? styles.active : ""
          }`}
          onClick={() => setFilter("favorites")}
        >
          favorites
        </button>
      </nav>
      <ul className={styles.list}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
};
