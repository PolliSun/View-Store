import React, { FC } from "react";
import styles from "./product-list.module.css";
import { TProduct } from "../../../utils/types";
import { ProductCard } from "../../product-card/product-card";

type ProductListUIProps = {
  products: TProduct[];
};

export const ProductListUI: FC<ProductListUIProps> = ({ products }) => {
  return (
    <section className={styles.section}>
        <nav className={styles.navigation}>
            <button className={styles.button}>all</button>
            <button className={styles.button}>favorites</button>
        </nav>
      <ul className={styles.list}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
};
